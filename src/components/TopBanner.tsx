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
          <svg viewBox="0 0 20 20" className="w-4 h-4"><circle cx="10" cy="10" r="9" fill="#FF7900"/><text x="10" y="13" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">OM</text></svg>
          <span>Orange Money</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <svg viewBox="0 0 20 20" className="w-4 h-4"><circle cx="10" cy="10" r="9" fill="#0085FF"/><path d="M4 13 Q6 9 8 11 Q10 13 12 9 Q14 5 16 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
          <span>Wave</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <svg viewBox="0 0 20 20" className="w-4 h-4"><circle cx="10" cy="10" r="9" fill="#00B862"/><text x="10" y="13" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">FM</text></svg>
          <span>Free Money</span>
        </span>
      </div>
    </div>
  )
}
