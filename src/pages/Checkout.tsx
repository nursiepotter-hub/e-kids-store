import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Lock } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({ nom: '', prenom: '', telephone: '', ville: '', quartier: '' })
  const [payment, setPayment] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSuccess(true)
    clearCart()
  }

  if (items.length === 0 && !success) {
    navigate('/panier')
    return null
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Commande confirmée !</h2>
          <p className="text-gray-600 mb-8">
            Merci pour votre commande ! Vous allez recevoir un SMS de confirmation.
            Nous vous contacterons pour organiser la livraison.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary text-lg"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <button onClick={() => navigate('/panier')} className="flex items-center gap-2 text-gray-500 hover:text-coral-400 font-medium transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Retour au panier
        </button>

        <div className="grid lg:grid-cols-5 gap-10">
          <form onSubmit={handleSubmit} className="lg:col-span-3">
            <span className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Finaliser
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Livraison & paiement</h1>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                  <input name="prenom" value={form.prenom} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none bg-gray-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
                <input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="77 XXX XX XX"
                  className="w-full px-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none bg-gray-50" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Ville *</label>
                  <input name="ville" value={form.ville} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Quartier *</label>
                  <input name="quartier" value={form.quartier} onChange={handleChange} required
                    className="w-full px-4 py-3.5 rounded-full border-2 border-gray-200 focus:border-coral-400 focus:ring-2 focus:ring-coral-100 outline-none bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Mode de paiement *</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'orange', label: 'Orange Money', icon: '💛' },
                    { value: 'wave', label: 'Wave', icon: '💙' },
                    { value: 'free', label: 'FreeMoney', icon: '💚' },
                  ].map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() => setPayment(m.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                        payment === m.value ? 'border-coral-400 bg-coral-50' : 'border-gray-200 hover:border-coral-200'
                      }`}
                    >
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-xs font-semibold text-gray-700">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !payment}
              className="btn-primary w-full mt-6 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Lock className="w-5 h-5" />
              {submitting ? 'Traitement...' : `Commander ${total.toLocaleString()} FCFA`}
            </button>
            <p className="text-xs text-gray-400 text-center mt-4">
              Paiement sécurisé via Orange Money, Wave ou FreeMoney
            </p>
          </form>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100 sticky top-28">
              <h3 className="font-bold text-xl text-gray-800 mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-xl bg-gray-50" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-800 text-sm truncate">{item.name}</p>
                      <p className="text-xs text-gray-500">x{item.quantity}</p>
                    </div>
                    <span className="text-sm font-bold text-gray-800 whitespace-nowrap">{(item.price * item.quantity).toLocaleString()} F</span>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-gray-100 pt-4 space-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
