import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, total, itemCount, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <span className="text-6xl mb-6 block">🛒</span>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">Découvrez notre sélection de jouets éducatifs.</p>
          <Link to="/produits" className="btn-primary text-lg inline-flex items-center justify-center gap-2">
            Voir les jouets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <Link to="/produits" className="inline-flex items-center gap-2 text-gray-500 hover:text-coral-400 font-medium transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Continuer les achats
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Mon panier ({itemCount} article{itemCount > 1 ? 's' : ''})
            </h1>
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 sm:p-6 flex gap-4 shadow-md border border-gray-100">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 mb-2">{item.name}</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-coral-400 hover:bg-gray-50 transition-colors font-bold">−</button>
                      <span className="w-8 text-center text-sm font-bold text-gray-800">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-coral-400 hover:bg-gray-50 transition-colors font-bold">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-coral-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-gray-800">{(item.price * item.quantity).toLocaleString()} F</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 sticky top-28">
              <h3 className="font-bold text-xl text-gray-800 mb-6">Récapitulatif</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Livraison</span>
                  <span className="text-green-600">Gratuite</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 text-lg border-t-2 border-gray-100 pt-3 mt-3">
                  <span>Total</span>
                  <span className="text-coral-400">{total.toLocaleString()} FCFA</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="btn-primary w-full text-center block text-lg"
              >
                Commander
              </Link>
              <p className="text-xs text-gray-400 text-center mt-4">
                Paiement : Orange Money · Wave · FreeMoney
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
