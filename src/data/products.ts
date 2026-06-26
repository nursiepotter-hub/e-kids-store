export interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  ageRange?: string
  description: string
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
  bgColor: string
}

export const categories: Category[] = [
  { id: 'educatifs', name: 'Éducatifs', icon: '🧩', color: '#FF6B6B', bgColor: 'bg-coral-100' },
  { id: 'puzzles', name: 'Puzzles & Livres', icon: '🔤', color: '#4ECDC4', bgColor: 'bg-sky-100' },
  { id: 'rangements', name: 'Rangements', icon: '📦', color: '#FFD93D', bgColor: 'bg-yellow-100' },
  { id: 'jeux-role', name: 'Jeux de rôle', icon: '🍳', color: '#95E1D3', bgColor: 'bg-mint-100' },
  { id: 'sensoriel', name: 'Sensoriel', icon: '🎵', color: '#A78BFA', bgColor: 'bg-purple-100' },
  { id: 'stem', name: 'STEM', icon: '🧲', color: '#FF8E8E', bgColor: 'bg-coral-50' },
]

export const products: Product[] = [
  {
    id: 'bloc-bois-edu',
    name: 'Bloc de Construction Éducatif en Bois',
    price: 10000,
    image: '/images/toy1.jpeg',
    category: 'educatifs',
    ageRange: '3-6 ans',
    description: 'Bloc de construction en bois pour développer la créativité et la motricité fine des enfants.',
  },
  {
    id: 'bloc-petits',
    name: 'Bloc de Construction - Moins de 4 ans',
    price: 5000,
    image: '/images/toy2.jpeg',
    category: 'educatifs',
    ageRange: 'Moins de 4 ans',
    description: 'Bloc de construction adapté aux enfants de moins de 4 ans.',
  },
  {
    id: 'construction-chaise',
    name: 'Jouet de Construction avec Chaise',
    price: 20000,
    image: '/images/toy3.jpeg',
    category: 'educatifs',
    ageRange: '2-5 ans',
    description: 'Ensemble de construction avec chaise intégrée pour des heures de jeu.',
  },
  {
    id: 'puzzle-avance',
    name: 'Puzzle Niveau Avancé',
    price: 6000,
    image: '/images/toy4.jpeg',
    category: 'puzzles',
    ageRange: 'Dès 3 ans',
    description: 'Puzzle éducatif de niveau avancé. Développe la logique.',
  },
  {
    id: 'puzzle-voyage',
    name: 'Puzzle Pratique à Emporter',
    price: 2500,
    image: '/images/toy5.jpeg',
    category: 'puzzles',
    ageRange: '2+ ans',
    description: 'Puzzle compact et facile à transporter. Idéal pour les voyages.',
  },
  {
    id: 'puzzle-lettres',
    name: 'Puzzle de Lettres Éducatif',
    price: 8000,
    image: '/images/toy6.jpeg',
    category: 'puzzles',
    ageRange: '3-5 ans',
    description: 'Puzzle alphabétique pour apprendre les lettres tout en s\'amusant.',
  },
  {
    id: 'maths-learn',
    name: 'Apprentissage des Maths',
    price: 5000,
    image: '/images/toy7.jpeg',
    category: 'stem',
    ageRange: '4-7 ans',
    description: 'Jeu éducatif pour l\'apprentissage des mathématiques de façon ludique.',
  },
  {
    id: 'magnetiques-148',
    name: 'Box 148 Pièces Magnétiques',
    price: 17500,
    image: '/images/toy8.jpeg',
    category: 'stem',
    ageRange: '3+ ans',
    description: 'Coffret de 148 pièces magnétiques pour construire et créer à l\'infini.',
  },
  {
    id: 'magnetiques-60',
    name: 'Box 60 Pièces Magnétiques',
    price: 20000,
    image: '/images/toy9.jpeg',
    category: 'stem',
    ageRange: '3+ ans',
    description: 'Coffret de 60 pièces magnétiques pour des constructions solides.',
  },
  {
    id: 'xylophone',
    name: 'Jouet Sensoriel Xylophone',
    price: 8000,
    image: '/images/toy10.jpeg',
    category: 'sensoriel',
    ageRange: 'Tout-petits',
    description: 'Jouet sensoriel avec xylophone pour les tout-petits.',
  },
  {
    id: 'soins-capillaires',
    name: 'Boîte Soins Capillaires Princesse',
    price: 8000,
    image: '/images/toy11.jpeg',
    category: 'jeux-role',
    ageRange: '3-6 ans',
    description: 'Boîte de jouets aux soins capillaires pour princesses.',
  },
  {
    id: 'cuisine-edu',
    name: 'Jeu de Rôle Cuisine Éducatif',
    price: 12500,
    image: '/images/toy12.jpeg',
    category: 'jeux-role',
    ageRange: '3-6 ans',
    description: 'Cuisine éducative pour jouer au chef cuisinier.',
  },
  {
    id: 'livre-formes',
    name: 'Livre Formes, Lettres & Couleurs',
    price: 2500,
    image: '/images/toy13.jpeg',
    category: 'puzzles',
    ageRange: 'Moins de 5 ans',
    description: 'Livre éducatif pour la reconnaissance des formes, lettres et couleurs.',
  },
  {
    id: 'rangement-fillette',
    name: 'Rangement Accessoires Fillette',
    price: 15000,
    image: '/images/toy14.jpeg',
    category: 'rangements',
    ageRange: 'Tout âge',
    description: 'Rangement d\'accessoires avec compartiments et stickers mignons.',
  },
  {
    id: 'box-rangement',
    name: 'Box Rangement Chambre Enfant',
    price: 10000,
    image: '/images/toy15.jpeg',
    category: 'rangements',
    description: 'Box idéale pour chambres d\'enfants. Plusieurs couleurs disponibles.',
  },
  {
    id: 'rangement-pratique',
    name: 'Box de Rangement Pratique',
    price: 6500,
    image: '/images/toy16.jpeg',
    category: 'rangements',
    description: 'Box de rangement pratique pour les enfants.',
  },
  {
    id: 'voiture-plastique',
    name: 'Voiture en Plastique',
    price: 0,
    image: '/images/toy17.jpeg',
    category: 'jeux-role',
    description: 'Voiture jouet en plastique résistant. (Prix à venir)',
  },
  {
    id: 'jouet-plastique',
    name: 'Jouet Éducatif en Plastique',
    price: 0,
    image: '/images/toy18.jpeg',
    category: 'educatifs',
    description: 'Jouet éducatif en plastique. (Prix à venir)',
  },
  {
    id: 'boite-magnetique-1',
    name: 'Boîte Magnétique de Construction',
    price: 15000,
    image: '/images/toy19.jpeg',
    category: 'stem',
    ageRange: '3+ ans',
    description: 'Boîte magnétique pour constructions créatives.',
  },
  {
    id: 'bloc-construction-extra',
    name: 'Bloc de Construction Extra',
    price: 12000,
    image: '/images/toy20.jpeg',
    category: 'educatifs',
    ageRange: '2-5 ans',
    description: 'Bloc de construction extra large pour les tout-petits.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Aminata D.',
    location: 'Dakar',
    rating: 5,
    text: 'Mes enfants adorent leurs nouveaux jouets ! Ils passent moins de temps sur la tablette et plus de temps à construire et créer. Merci E Kids Store !',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Moussa S.',
    location: 'Saint-Louis',
    rating: 5,
    text: 'La livraison était rapide et les produits sont de très bonne qualité. Mon fils de 4 ans apprend déjà ses couleurs et ses formes avec les puzzles.',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Fatou M.',
    location: 'Thiès',
    rating: 5,
    text: 'J\'ai offert une box cadeau à ma nièce pour son anniversaire. Elle était ravie ! Les jouets sont parfaitement adaptés à son âge.',
    avatar: '👩‍🦰'
  },
]
