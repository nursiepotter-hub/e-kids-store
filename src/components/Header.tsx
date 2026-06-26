import { useState, useCallback } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { href: '/', label: 'Accueil', anchor: false },
  { href: '/produits', label: 'Nos jouets', anchor: false },
  { href: 'histoire', label: 'Notre histoire', anchor: true },
  { href: 'contact', label: 'Contact', anchor: true },
]

export default function Header() {
  const { itemCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAnchor = useCallback((id: string) => {
    setIsOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, navigate])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b-4 border-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-red flex items-center justify-center shadow-md ring-2 ring-yellow">
              <span className="text-white font-display font-bold text-xl">K</span>
            </div>
            <div>
              <span className="font-display text-xl text-charcoal tracking-wide leading-tight">E-Kids Store</span>
              <span className="text-[10px] tracking-[0.2em] text-sage uppercase font-bold">Jouets éducatifs</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.anchor ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="text-sm font-bold text-charcoal/70 hover:text-red transition-colors"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-bold transition-colors ${
                    location.pathname === link.href ? 'text-red' : 'text-charcoal/70 hover:text-red'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/panier"
              className="relative p-2 text-charcoal/70 hover:text-red transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red text-white text-xs rounded-full flex items-center justify-center font-bold shadow-sm">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-charcoal/70 hover:text-red"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t-2 border-blue/30">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) =>
              link.anchor ? (
                <button
                  key={link.href}
                  onClick={() => handleAnchor(link.href)}
                  className="text-lg font-bold text-charcoal/70 hover:text-red transition-colors py-2 text-left"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-charcoal/70 hover:text-red transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
