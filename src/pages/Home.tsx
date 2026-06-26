import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { products, categories, testimonials } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import ProductCarousel from '@/components/ProductCarousel'

const reasons = [
  {
    icon: '🧠',
    title: "Stimule l'intelligence",
    desc: 'Des jouets pensés pour développer la curiosité et la créativité de votre enfant',
    bg: 'bg-purple-100',
    iconBg: 'bg-purple-500',
  },
  {
    icon: '🎯',
    title: 'Adapté à chaque âge',
    desc: 'Des produits sélectionnés selon le stade de développement de l\'enfant',
    bg: 'bg-sky-100',
    iconBg: 'bg-sky-500',
  },
  {
    icon: '🌍',
    title: 'Livraison au Sénégal',
    desc: 'Commandez depuis chez vous, on s\'occupe du reste',
    bg: 'bg-green-100',
    iconBg: 'bg-green-500',
  },
]

const problems = [
  { icon: '📵', text: 'Concentration réduite — Les enfants sur écrans perdent jusqu\'à 30% de leur capacité d\'attention' },
  { icon: '😔', text: 'Isolement social — Moins d\'interactions, moins d\'empathie développée' },
  { icon: '🧠', text: 'Développement freiné — Les zones du cerveau liées à la créativité sont moins stimulées' },
  { icon: '😴', text: 'Troubles du sommeil — La lumière bleue perturbe le sommeil des tout-petits' },
  { icon: '😤', text: 'Irritabilité & dépendance — Les écrans créent une addiction dès le plus jeune âge' },
  { icon: '🗣️', text: 'Retard de langage — Moins d\'échanges réels = moins de vocabulaire acquis' },
]

const benefits = [
  { icon: '🧩', title: 'Développe la logique', desc: 'Les puzzles et blocs apprennent à résoudre des problèmes', bg: 'bg-coral-100' },
  { icon: '🎨', title: 'Stimule la créativité', desc: 'Construire, assembler, imaginer : l\'enfant devient acteur de son jeu', bg: 'bg-yellow-100' },
  { icon: '🤝', title: 'Favorise le lien social', desc: 'Jouer ensemble développe l\'écoute, le partage et la coopération', bg: 'bg-sky-100' },
  { icon: '✋', title: 'Affine la motricité fine', desc: 'Manipuler des pièces renforce la coordination main-œil', bg: 'bg-green-100' },
  { icon: '📚', title: 'Prépare à l\'école', desc: 'Lettres, chiffres, formes : apprendre en jouant c\'est retenir', bg: 'bg-purple-100' },
  { icon: '😊', title: 'Renforce la confiance', desc: 'Chaque réussite construit un enfant épanoui', bg: 'bg-pink-100' },
]

const formatPrice = (price: number) => {
  if (price === 0) return 'Prix à définir'
  return `${price.toLocaleString('fr-FR')} F`
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-coral-50 overflow-hidden">
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-60">🧩</div>
      <div className="absolute top-40 right-20 text-3xl animate-float opacity-60" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}>🎨</div>
      <div className="absolute top-60 left-1/4 text-2xl animate-pulse-soft opacity-40">✨</div>
      <div className="absolute bottom-60 right-1/4 text-2xl animate-pulse-soft opacity-40" style={{ animationDelay: '0.5s' }}>🌟</div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>🌟</span>
              <span>Jouets éducatifs de qualité</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Rendre aux enfants leur{' '}
              <span className="text-coral-400">enfance</span> ✨
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Des jouets éducatifs et créatifs pour éveiller l'imagination, loin des écrans. Livrés partout au Sénégal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/produits" className="btn-primary text-lg inline-flex items-center justify-center gap-2">
                <span>Découvrir nos produits</span>
                <span>→</span>
              </Link>
              <a href="#box-cadeaux" className="btn-secondary text-lg inline-flex items-center justify-center gap-2">
                <span>Nos Box Cadeaux</span>
                <span>🎁</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-coral-100 flex items-center justify-center text-sm">👶</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-sm">👧</div>
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sm">👦</div>
                </div>
                <span className="text-sm text-gray-600">+500 enfants contents</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-sm text-gray-600">5.0 rating</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2">
              <span className="text-gray-500 text-sm">✨ Suivez-nous sur</span>
              <a href="https://www.instagram.com/e_kidstore13" target="_blank" rel="noopener noreferrer"
                className="text-pink-500 font-semibold hover:text-pink-600 transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @e_kidstore13
              </a>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="/images/hero-accueil.png"
                alt="Enfants jouant avec des jouets éducatifs"
                className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full opacity-40 blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-coral-300 rounded-full opacity-40 blur-xl" />
            <div className="absolute top-1/2 -right-4 w-24 h-24 bg-sky-300 rounded-full opacity-40 blur-lg" />

            <div className="absolute -left-16 top-1/3 bg-white rounded-2xl shadow-lg p-4 animate-bounce-slow">
              <div className="flex items-center gap-2">
                <span className="text-3xl">🧠</span>
                <div>
                  <p className="font-bold text-gray-800">100%</p>
                  <p className="text-xs text-gray-500">Éducatif</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 bottom-1/3 bg-white rounded-2xl shadow-lg p-4 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🚚</span>
                <div>
                  <p className="font-bold text-gray-800">Sénégal</p>
                  <p className="text-xs text-gray-500">Livraison</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative w-full h-16 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" opacity=".8" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#ffffff" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-coral-100 text-coral-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pourquoi nous choisir ?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Pourquoi E Kids Store ? 💛</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className={`${r.bg} rounded-3xl p-8 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}>
              <div className={`w-20 h-20 ${r.iconBg} rounded-full flex items-center justify-center text-4xl mx-auto mb-6 transform hover:scale-110 transition-transform`}>
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{r.title}</h3>
              <p className="text-gray-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="histoire" className="py-16 md:py-24 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=500&fit=crop"
              alt="Enfant jouant avec des jouets en bois"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <span className="text-4xl">💛</span>
                <div>
                  <p className="font-bold text-gray-800">Fait pour les</p>
                  <p className="text-sm text-gray-500">loulous avec amour</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Nous avons choisi de rendre leur enfance aux enfants. 💛
            </h2>
            <p className="text-gray-600 italic text-lg leading-relaxed">
              Il était une fois des enfants qui ne jouaient plus. Ils ne couraient plus, ne construisaient plus, n'inventaient plus. Leurs yeux étaient rivés sur des écrans. Leurs petits doigts glissaient sur des tablettes. Leurs imaginaires s'éteignaient, doucement, sans qu'on s'en rende vraiment compte.
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Le problème des écrans 📵</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <div key={i} className="alert-block bg-white rounded-xl">
                <span className="text-2xl">{p.icon}</span>
                <p className="text-gray-700">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">La naissance de E Kids Store 🌟</h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            C'est face à ce constat que E Kids Store est né. Nous sommes des parents, des éducateurs, des passionnés de l'enfance qui avons décidé que nos enfants méritaient mieux. Mieux qu'un écran froid. Mieux qu'une vidéo en boucle. Ils méritent de toucher, de construire, de découvrir, de rater et recommencer. Ils méritent de rire en jouant, de réfléchir en s'amusant, de grandir en créant.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Les bienfaits de nos jouets ✨</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className={`${b.bg} benefit-card rounded-2xl p-6`}>
                <span className="text-4xl mb-4 block">{b.icon}</span>
                <h4 className="font-bold text-gray-800 mb-2">{b.title}</h4>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="quote-box text-center max-w-2xl mx-auto">
            <p className="text-2xl font-bold text-gray-800 mb-4">
              "Un enfant qui joue avec ses mains développe un cerveau qui pense par lui-même."
            </p>
            <p className="text-gray-600 font-medium">— L'équipe E Kids Store</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Chez E Kids Store, nous ne vendons pas des jouets. Nous offrons du temps de qualité. Nous offrons des souvenirs d'enfance. Nous offrons à chaque enfant la chance de devenir curieux, intelligent et épanoui. Parce que la plus belle chose que vous puissiez donner à votre enfant, c'est une enfance vraiment vécue. 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produits" className="btn-primary text-lg inline-flex items-center justify-center gap-2">
              <span>Découvrir nos jouets éducatifs</span>
              <span>→</span>
            </Link>
            <a href="#box-cadeaux" className="btn-secondary text-lg inline-flex items-center justify-center gap-2">
              <span>Voir nos Box Cadeaux</span>
              <span>🎁</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Explorer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Nos Catégories 🎯</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trouvez le jouet parfait pour chaque âge et chaque moment d'apprentissage
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/produits"
              className="category-card bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl border border-gray-100"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4"
                style={{ backgroundColor: `${cat.color}20` }}
              >
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsPreview() {
  const { addItem } = useCart()
  const [addedId, setAddedId] = useState<string | null>(null)
  const featured = products.slice(0, 4)

  const handleAdd = (p: typeof products[0]) => {
    addItem(p)
    setAddedId(p.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  return (
    <section id="produits" className="py-16 md:py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Nos Produits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Jouets Éducatifs & Accessoires 🧸</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Des jouets soigneusement sélectionnés pour éveiller la curiosité et développer les compétences de votre enfant
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <div key={p.id} className="product-card bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative overflow-hidden bg-gray-50">
                <ProductCarousel images={p.images} alt={p.name} className="w-full h-52" />
                {p.ageRange && (
                  <span className="absolute top-4 left-4 bg-coral-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {p.ageRange}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">{p.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className={`price-tag ${p.price === 0 ? 'na' : ''}`}>{formatPrice(p.price)}</span>
                </div>
                <button
                  onClick={() => handleAdd(p)}
                  className={`add-cart-btn w-full justify-center ${addedId === p.id ? '!bg-green-500' : ''}`}
                >
                  {addedId === p.id ? '✓ Ajouté !' : (
                    <><ShoppingCart size={18} /><span>Ajouter au panier</span></>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/produits" className="btn-primary text-lg inline-flex items-center justify-center gap-2">
            <span>Voir tous nos produits</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function GiftBoxSection() {
  return (
    <section id="box-cadeaux" className="py-16 md:py-24 bg-gradient-to-br from-yellow-100 via-pink-50 to-purple-100 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl opacity-30 animate-float">🎁</div>
      <div className="absolute top-20 right-20 text-3xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>⭐</div>
      <div className="absolute bottom-10 left-1/4 text-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>✨</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-30 animate-float" style={{ animationDelay: '0.3s' }}>🎀</div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/80 backdrop-blur-sm text-coral-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎁 Box Cadeaux
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Offrez un cadeau qui a du sens ! 🎁</h2>
            <p className="text-gray-600 text-lg mb-8">
              Nos box cadeaux sont soigneusement préparées pour ravir les enfants et rassurer les parents. Le cadeau parfait pour chaque occasion.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Sélection de jouets adaptés à l\'âge',
                'Emballage cadeau élégant inclus',
                'Livraison partout au Sénégal',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 0 ? 'bg-coral-100 text-coral-500' : i === 1 ? 'bg-yellow-100 text-yellow-600' : 'bg-sky-100 text-sky-600'}`}>✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/221772501082" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg inline-flex items-center gap-2">
              <span>Commander une Box</span>
              <span>🎁</span>
            </a>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=400&fit=crop"
                alt="Box cadeau"
                className="w-full rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral-300 rounded-full opacity-50" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-purple-300 rounded-full opacity-50" />
          </div>
        </div>
      </div>
    </section>
  )
}

function DeliverySection() {
  const features = [
    { icon: '🚚', title: 'Livraison partout au Sénégal', sub: 'Rapide et fiable', bg: 'bg-blue-100', iconBg: 'bg-blue-500' },
    { icon: '💛', title: 'Orange Money', sub: 'Paiement simple et sécurisé', bg: 'bg-orange-100', iconBg: 'bg-orange-500' },
    { icon: '💙', title: 'Wave', sub: 'Paiement simple et sécurisé', bg: 'bg-sky-100', iconBg: 'bg-sky-500' },
    { icon: '💚', title: 'Free Money', sub: 'Paiement simple et sécurisé', bg: 'bg-green-100', iconBg: 'bg-green-500' },
  ]

  return (
    <section id="livraison" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Livraison & Paiement
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Commandez en toute confiance 🛒</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((f, i) => (
            <div key={i} className={`${f.bg} rounded-2xl p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-lg`}>
              <div className={`w-16 h-16 ${f.iconBg} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>{f.icon}</div>
              <h3 className="font-bold text-gray-800 mb-1">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.sub}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 text-lg">
          Commandez en toute confiance. Paiement sécurisé, livraison rapide partout au Sénégal. 🚚
        </p>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-coral-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Avis de nos clients ⭐</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Découvrez ce que les parents disent de E Kids Store</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card bg-white rounded-2xl p-8 shadow-md relative">
              <div className="absolute -top-4 left-6 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <span key={i} className="text-yellow-400 text-xl">★</span>)}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center text-2xl">{t.avatar}</div>
                <div>
                  <p className="font-bold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          {[
            { num: '500+', label: 'Clients satisfaits', color: 'text-coral-400' },
            { num: '5.0', label: 'Note moyenne', color: 'text-yellow-400' },
            { num: '100%', label: 'Produits vérifiés', color: 'text-sky-400' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className={`text-3xl font-bold ${s.color}`}>{s.num}</span>
              <span className="text-gray-600">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-sky-400 to-sky-500 relative overflow-hidden">
      <div className="absolute top-10 left-10 text-4xl opacity-20">✨</div>
      <div className="absolute top-20 right-20 text-3xl opacity-20">⭐</div>
      <div className="absolute bottom-10 left-1/4 text-3xl opacity-20">🌟</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20">💛</div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Newsletter
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Rejoignez la communauté E Kids Store ! 💛</h2>
        <p className="text-white/90 text-lg mb-8">Recevez nos nouveautés, conseils éducatifs et offres exclusives.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="newsletter-input flex-1"
            required
          />
          <button type="submit" className="bg-coral-400 hover:bg-coral-500 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap">
            S'inscrire ✓
          </button>
        </form>
        {subscribed && (
          <div className="mt-4 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full inline-block animate-slide-up">
            Merci pour votre inscription ! 🎉
          </div>
        )}
        <p className="text-white/70 text-sm mt-6">
          En vous inscrivant, vous acceptez de recevoir nos communications. Désabonnement possible à tout moment.
        </p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyUsSection />
      <AboutSection />
      <CategoriesSection />
      <ProductsPreview />
      <GiftBoxSection />
      <DeliverySection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}
