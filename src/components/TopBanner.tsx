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
          <span className="w-3 h-3 rounded-full bg-orange-400" />
          <span>Orange Money</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-blue-400" />
          <span>Wave</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span>Free Money</span>
        </span>
      </div>
    </div>
  )
}
