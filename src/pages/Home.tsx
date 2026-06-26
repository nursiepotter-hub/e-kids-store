import { Link } from 'react-router-dom'
import { ArrowRight, Truck, Shield, Heart, Smartphone, ToyBrick, Puzzle, Sparkles, Baby, Backpack, Gift, Star } from 'lucide-react'

const categories = [
  { name: 'Blocs & Construction', icon: ToyBrick, bg: 'bg-blue/20', color: 'text-blue', desc: 'Jeux de construction et STEM' },
  { name: 'Sensoriel', icon: Sparkles, bg: 'bg-green/20', color: 'text-green', desc: 'Éveil des sens' },
  { name: 'Éducatif', icon: Puzzle, bg: 'bg-yellow/20', color: 'text-charcoal', desc: 'Apprentissage ludique' },
  { name: 'Rangements', icon: Backpack, bg: 'bg-blue/20', color: 'text-blue', desc: 'Sacs, boîtes et box' },
  { name: 'Jeux de Rôle', icon: Baby, bg: 'bg-green/20', color: 'text-green', desc: 'Cuisine, soins, métiers' },
  { name: 'Box Cadeaux', icon: Gift, bg: 'bg-red/20', color: 'text-red', desc: 'Coffrets surprises' },
]

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow/20 via-blue/5 to-red/10">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, #FF4D4D 3px, transparent 0)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-20 right-20 w-72 h-72 bg-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-red/10 text-red px-5 py-2.5 rounded-full text-sm font-bold mb-8 ring-2 ring-red/20">
                <Sparkles className="w-4 h-4" />
                Jouets éducatifs — Livrés au Sénégal
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
                Éveillez la{' '}
                <span className="text-red">curiosité</span>
                {' '}de vos enfants
              </h1>
              <p className="text-lg text-sage leading-relaxed mb-8 max-w-lg font-bold">
                Des jouets éducatifs et instructifs pour développer l'intelligence,
                la créativité et l'éveil des enfants. Fini les écrans, place au jeu !
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produits"
                  className="group inline-flex items-center justify-center gap-2 bg-red hover:bg-red-light text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-red/30 hover:shadow-xl hover:shadow-red/40 transition-all"
                >
                  Découvrir nos jouets
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#histoire"
                  className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/20 text-charcoal hover:border-red hover:text-red px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  Notre histoire
                </a>
              </div>

              <div className="flex gap-8 mt-12 pt-8 border-t border-charcoal/10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow fill-yellow" />
                  <span className="text-sm text-charcoal/60 font-bold">Jouets 100% éducatifs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue" />
                  <span className="text-sm text-charcoal/60 font-bold">Livraison Sénégal</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-yellow/50">
                <img
                  src="https://images.unsplash.com/photo-1612965981346-5e2f7a709eea?w=600"
                  alt="Jouets éducatifs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl ring-2 ring-yellow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-red" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-charcoal">Éveil & Créativité</p>
                    <p className="text-xs text-sage font-bold">Pour tous les âges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-bold tracking-widest text-sm uppercase">Nos gammes</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mt-4 mb-6">
              Découvrez nos{' '}
              <span className="text-red">catégories</span>
            </h2>
            <p className="text-sage leading-relaxed font-bold">
              Des jouets soigneusement sélectionnés pour éveiller l'intelligence
              et la créativité des enfants de 0 à 12 ans.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to="/produits"
                className="group p-8 rounded-[2rem] bg-cream border-2 border-charcoal/5 hover:border-red/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <cat.icon className={`w-8 h-8 ${cat.color}`} />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-2">{cat.name}</h3>
                <p className="text-sage text-sm font-bold">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section id="histoire" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue font-bold tracking-widest text-sm uppercase">Notre histoire</span>
            <h2 className="font-display text-4xl lg:text-5xl text-charcoal mt-4 mb-6">
              Pourquoi{' '}
              <span className="text-red">E-Kids Store</span> ?
            </h2>
            <p className="text-sage leading-relaxed font-bold">
              Née d'un constat simple : les enfants passent trop de temps sur les écrans
              et ne développent plus assez leur curiosité et créativité.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Sparkles, title: 'Éveiller', desc: 'Stimuler la curiosité naturelle des enfants avec des jouets qui captivent leur attention.' },
              { icon: Puzzle, title: 'Apprendre', desc: 'Développer l\'intelligence et la créativité à travers le jeu et l\'expérimentation.' },
              { icon: Heart, title: 'Grandir', desc: 'Accompagner chaque étape du développement avec des jouets adaptés à chaque âge.' },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-[2rem] bg-white border-2 border-charcoal/5 hover:border-blue/30 transition-all hover:shadow-lg">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-blue/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-blue" />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">{item.title}</h3>
                <p className="text-sage text-sm font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-20 bg-gradient-to-br from-red to-red-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-yellow font-bold tracking-widest text-sm uppercase">Pourquoi nous choisir</span>
            <h2 className="font-display text-3xl lg:text-4xl text-white mt-4">
              Nos <span className="text-yellow">engagements</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: 'Livraison Sénégal', desc: 'Partout au Sénégal, votre commande arrive chez vous.' },
              { icon: Shield, title: 'Jouets Sécurisés', desc: 'Tous nos jouets sont certifiés et adaptés aux enfants.' },
              { icon: Heart, title: 'Sélection Expert', desc: 'Chaque jouet est choisi pour sa valeur éducative.' },
              { icon: Smartphone, title: 'Paiement Mobile', desc: 'Orange Money, Wave, FreeMoney.' },
              { icon: Star, title: 'Qualité Garantie', desc: 'Des jouets durables et résistants.' },
              { icon: Gift, title: 'Box Cadeaux', desc: 'Des coffrets surprises pour tous les âges.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/15 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20 hover:bg-white/25 transition-all">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-yellow" />
                </div>
                <div>
                  <h3 className="font-display text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed font-bold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-blue font-bold tracking-widest text-sm uppercase">Restez connectée</span>
          <h2 className="font-display text-4xl text-charcoal mt-4 mb-6">
            Recevez nos{' '}
            <span className="text-red">offres exclusives</span>
          </h2>
          <p className="text-sage font-bold mb-8">
            Soyez la première informée des nouveaux arrivages et des promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-6 py-4 rounded-full border-2 border-charcoal/10 focus:border-red focus:ring-2 focus:ring-red/20 outline-none bg-white font-bold"
            />
            <button className="px-8 py-4 bg-red hover:bg-red-light text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-red/30 whitespace-nowrap">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
