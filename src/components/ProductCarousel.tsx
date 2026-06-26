import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: string[]
  alt: string
  className?: string
}

export default function ProductCarousel({ images, alt, className = '' }: Props) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  return (
    <div className={`relative overflow-hidden bg-gray-50 ${className}`}>
      <img
        src={images[current]}
        alt={`${alt} - ${current + 1}`}
        className="product-image w-full h-full object-cover p-2"
        style={{ borderRadius: '12px' }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1))
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1))
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-all"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
          <span className="absolute top-2 right-2 bg-black/40 text-white text-xs px-2 py-0.5 rounded-full">
            {current + 1}/{images.length}
          </span>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setCurrent(i)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-coral-400 w-4' : 'bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
