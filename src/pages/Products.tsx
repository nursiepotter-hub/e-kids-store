import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ShoppingCart, Filter } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCarousel from '@/components/ProductCarousel'

const formatPrice = (price: number) => {
  if (price === 0) return 'Prix à définir'
  return `${price.toLocaleString('fr-FR')} F`
}

export default function Products() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [activeCat, setActiveCat] = useState(params.get('categorie') || 'all')
  const { addItem } = useCart()

  const filtered = activeCat === 'all'
    ? products
    : products.filter(p => p.category === activeCat)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Produits
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Jouets Éducatifs & Accessoires 🧸</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Des jouets soigneusement sélectionnés pour éveiller la curiosité et développer les compétences de votre enfant
          </p>
        </div>

        <div className="mb-10">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="text-gray-500" size={18} />
              <span className="font-semibold text-gray-700">Catégories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCat('all')}
                className={`filter-tab ${activeCat === 'all' ? 'active' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                Tous
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`filter-tab ${activeCat === cat.id ? 'active' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={() => addItem(p)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-gray-600 text-lg">Aucun produit trouvé pour ces critères.</p>
            <button
              onClick={() => { setActiveCat('all') }}
              className="mt-4 text-coral-400 font-semibold hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProductCard({ product, onAdd }: { product: typeof products[0]; onAdd: () => void }) {
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    onAdd()
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
      <div className="relative overflow-hidden bg-gray-50">
        <ProductCarousel images={product.images} alt={product.name} className="w-full h-52" />
        {product.ageRange && (
          <span className="absolute top-4 left-4 bg-coral-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {product.ageRange}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className={`price-tag ${product.price === 0 ? 'na' : ''}`}>{formatPrice(product.price)}</span>
        </div>
        <button
          onClick={handleAdd}
          className={`add-cart-btn w-full justify-center ${added ? '!bg-green-500' : ''}`}
        >
          {added ? '✓ Ajouté !' : (
            <><ShoppingCart size={18} /><span>Ajouter au panier</span></>
          )}
        </button>
      </div>
    </div>
  )
}
