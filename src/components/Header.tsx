import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Produits', href: '/produits' },
  { name: 'Notre Histoire', href: '/#histoire' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  const handleNav = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const section = href.replace('/#', '')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(href)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-coral-400 to-pink-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white text-xl">⭐</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Baloo 2' }}>
                E Kids <span className="text-coral-400">Store</span>
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="nav-link text-gray-700 hover:text-coral-400 font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/e_kidstore13"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600 hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="border-2 border-coral-400 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-coral-500 w-40 sm:w-60"
                    autoFocus
                  />
                  <button onClick={() => setSearchOpen(false)} className="text-gray-500 hover:text-coral-400">
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <button onClick={() => setSearchOpen(true)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Search className="text-gray-600" size={22} />
                </button>
              )}
            </div>

            <Link to="/panier" className="p-2 rounded-full hover:bg-gray-100 transition-colors relative">
              <ShoppingCart className="text-gray-600" size={22} />
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {mobileOpen ? <X className="text-gray-600" size={24} /> : <Menu className="text-gray-600" size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Baloo 2' }}>
              E Kids Store
            </span>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
              <X className="text-gray-600" size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNav(link.href)}
                className="text-lg font-medium text-gray-700 hover:text-coral-400 py-2 border-b border-gray-100 text-left"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
