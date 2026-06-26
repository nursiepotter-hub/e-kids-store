import { Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Cart() {
  const { items, total, itemCount, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-cream flex items-center justify-center border-2 border-charcoal/5">
            <ShoppingBag className="w-10 h-10 text-coral" />
          </div>
          <h2 className="font-display text-3xl text-charcoal mb-3">Votre panier est vide</h2>
          <p className="text-sage font-semibold mb-8">Découvrez notre sélection de jouets éducatifs.</p>
          <Link
            to="/produits"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral-light text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-coral/30"
          >
            Voir les jouets
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/produits" className="inline-flex items-center gap-2 text-sage hover:text-coral font-bold transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Continuer les achats
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="font-display text-3xl text-charcoal mb-6">
              Mon panier ({itemCount} article{itemCount > 1 ? 's' : ''})
            </h1>
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-[1.5rem] p-4 sm:p-6 flex gap-4 border-2 border-charcoal/5 shadow-sm">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-cream" />
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-teal font-bold uppercase tracking-wider">{item.category}</span>
                  <h3 className="font-display text-lg text-charcoal mt-1">{item.name}</h3>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="flex items-center border-2 border-charcoal/10 rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-charcoal/60 hover:text-coral hover:bg-cream transition-colors font-bold"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-bold text-charcoal">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-charcoal/60 hover:text-coral hover:bg-cream transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sage hover:text-coral transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-display text-lg font-bold text-coral">{(item.price * item.quantity).toLocaleString()} F</span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-white rounded-[1.5rem] p-6 sm:p-8 border-2 border-charcoal/5 shadow-sm sticky top-28">
              <h3 className="font-display text-xl text-charcoal mb-6">Récapitulatif</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sage text-sm font-semibold">
                  <span>Sous-total</span>
                  <span>{total.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-sage text-sm font-semibold">
                  <span>Livraison</span>
                  <span className="text-teal">Gratuite</span>
                </div>
                <div className="flex justify-between font-bold text-charcoal text-lg border-t-2 border-charcoal/5 pt-3 mt-3">
                  <span>Total</span>
                  <span className="text-coral">{total.toLocaleString()} FCFA</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-coral hover:bg-coral-light text-white text-center py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-coral/30"
              >
                Commander
              </Link>
              <p className="text-xs text-sage/60 text-center mt-4 font-semibold">
                Paiement : Orange Money · Wave · FreeMoney
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
