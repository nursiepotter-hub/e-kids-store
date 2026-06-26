export default function TopBanner() {
  return (
    <div className="bg-gradient-to-r from-coral-400 to-pink-500 text-white py-2 px-4 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <span className="flex items-center gap-1">
          <span>🚚</span>
          <span>Livraison partout au Sénégal</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <img src="/images/logo-orange-money.svg" alt="Orange Money" className="h-4 w-auto" />
          <span>Orange Money</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <img src="/images/logo-wave.png" alt="Wave" className="h-4 w-auto" />
          <span>Wave</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <img src="/images/logo-free-money.png" alt="Free Money" className="h-4 w-auto" />
          <span>Free Money</span>
        </span>
      </div>
    </div>
  )
}
