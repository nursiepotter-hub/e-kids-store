export interface Product {
  id: string
  name: string
  price: number
  category: string
  images: string[]
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
    id: 'bloc-petits',
    name: 'Bloc de Construction - Moins de 4 ans',
    price: 5000,
    images: ['/images/new-14.jpeg', '/images/new-15.jpeg', '/images/new-16.jpeg', '/images/new-18.jpeg', '/images/bloc-sensoriel-1.jpg', '/images/bloc-sensoriel-2.jpg'],
    category: 'educatifs',
    description: 'Bloc de construction adapté aux enfants.',
  },
  {
    id: 'construction-chaise',
    name: 'Jouet de Construction avec Chaise',
    price: 20000,
    images: ['/images/new-3.jpeg', '/images/new-4.jpeg', '/images/new-6.jpeg'],
    category: 'educatifs',
    description: 'Ensemble de construction avec chaise intégrée.',
  },
  {
    id: 'puzzle-avance',
    name: 'Puzzle Niveau Avancé',
    price: 6000,
    images: ['/images/new-41.jpeg', '/images/toy12.jpeg', '/images/toy13.jpeg', '/images/video-1.mp4'],
    category: 'puzzles',
    description: 'Puzzle éducatif de niveau avancé.',
  },
  {
    id: 'puzzle-voyage',
    name: 'Puzzle Pratique à Emporter',
    price: 2500,
    images: ['/images/toy14.jpeg', '/images/toy15.jpeg', '/images/toy16.jpeg', '/images/toy18.jpeg', '/images/toy19.jpeg'],
    category: 'puzzles',
    description: 'Puzzle compact et facile à transporter.',
  },
  {
    id: 'puzzle-lettres',
    name: 'Puzzle de Lettres Éducatif',
    price: 8000,
    images: ['/images/new-42.jpeg', '/images/toy11.jpeg', '/images/toy20.jpeg'],
    category: 'puzzles',
    description: 'Puzzle alphabétique pour apprendre les lettres.',
  },
  {
    id: 'maths-learn',
    name: 'Apprentissage des Maths',
    price: 5000,
    images: ['/images/new-39.jpeg'],
    category: 'stem',
    description: 'Jeu éducatif pour l\'apprentissage des mathématiques.',
  },
  {
    id: 'magnetiques-148',
    name: 'Box 148 Pièces Magnétiques',
    price: 17500,
    images: ['/images/new-1.jpeg', '/images/new-2.jpeg'],
    category: 'stem',
    description: 'Coffret de 148 pièces magnétiques.',
  },
  {
    id: 'magnetiques-60',
    name: 'Box 60 Pièces Magnétiques',
    price: 20000,
    images: ['/images/magnetique-60-1.jpg', '/images/magnetique-60-2.jpg', '/images/magnetique-60-3.jpg', '/images/magnetique-60-4.jpg'],
    category: 'stem',
    description: 'Coffret de 60 pièces magnétiques.',
  },
  {
    id: 'xylophone',
    name: 'Jouet Sensoriel Xylophone',
    price: 8000,
    images: ['/images/new-30.jpeg', '/images/new-31.jpeg', '/images/new-32.jpeg', '/images/new-33.jpeg', '/images/new-34.jpeg', '/images/new-35.jpeg'],
    category: 'sensoriel',
    description: 'Jouet sensoriel avec xylophone.',
  },
  {
    id: 'soins-capillaires',
    name: 'Boîte Soins Capillaires Princesse',
    price: 8000,
    images: ['/images/toy1.jpeg', '/images/toy2.jpeg'],
    category: 'jeux-role',
    description: 'Boîte de jouets aux soins capillaires.',
  },
  {
    id: 'cuisine-edu',
    name: 'Jeu de Rôle Cuisine Éducatif',
    price: 12500,
    images: ['/images/cuisine-1.jpg', '/images/cuisine-2.jpg'],
    category: 'jeux-role',
    description: 'Cuisine éducative.',
  },
  {
    id: 'livre-formes',
    name: 'Livre Formes, Lettres & Couleurs',
    price: 2500,
    images: ['/images/new-38.jpeg', '/images/new-40.jpeg'],
    category: 'puzzles',
    description: 'Livre éducatif.',
  },
  {
    id: 'rangement-fillette',
    name: 'Rangement Accessoires Fillette',
    price: 15000,
    images: ['/images/toy7.jpeg', '/images/toy8.jpeg', '/images/video-2.mp4'],
    category: 'rangements',
    description: 'Rangement d\'accessoires.',
  },
  {
    id: 'box-rangement',
    name: 'Box Rangement Chambre Enfant',
    price: 10000,
    images: ['/images/toy6.jpeg', '/images/toy10.jpeg'],
    category: 'rangements',
    description: 'Box pour chambres d\'enfants.',
  },
  {
    id: 'rangement-pratique',
    name: 'Box de Rangement Pratique',
    price: 6500,
    images: ['/images/toy3.jpeg', '/images/video-3.mp4'],
    category: 'rangements',
    description: 'Box de rangement pratique.',
  },
  {
    id: 'rangement-extra',
    name: 'Box de Rangement Extra',
    price: 7500,
    images: ['/images/rangement-extra-1.jpg', '/images/rangement-extra-2.jpg', '/images/rangement-extra-3.jpg'],
    category: 'rangements',
    description: 'Box de rangement extra, plus grande capacité.',
  },
  {
    id: 'voiture-plastique',
    name: 'Voiture en Plastique',
    price: 3000,
    images: ['/images/voiture-1.jpg', '/images/voiture-2.jpg'],
    category: 'jeux-role',
    description: 'Voiture jouet.',
  },
  {
    id: 'jouet-plastique',
    name: 'Jouet Éducatif en Plastique',
    price: 3000,
    images: ['/images/new-12.jpeg', '/images/new-13.jpeg', '/images/new-17.jpeg', '/images/new-20.jpeg', '/images/new-26.jpeg', '/images/new-37.jpeg'],
    category: 'educatifs',
    description: 'Jouet éducatif en plastique.',
  },
  {
    id: 'boite-magnetique-1',
    name: 'Boîte Magnétique de Construction',
    price: 15000,
    images: ['/images/new-5.jpeg', '/images/new-21.jpeg', '/images/new-22.jpeg', '/images/new-23.jpeg', '/images/new-24.jpeg', '/images/new-25.jpeg'],
    category: 'stem',
    description: 'Boîte magnétique pour constructions créatives.',
  },
  {
    id: 'bloc-construction-extra',
    name: 'Bloc de Construction Extra',
    price: 12000,
    images: ['/images/new-27.jpeg', '/images/new-28.jpeg', '/images/new-29.jpeg'],
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
