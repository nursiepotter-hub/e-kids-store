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
          <svg viewBox="0 0 30 12" className="h-3 w-auto"><path d="M2 10 Q5 4 8 7 Q11 10 14 4 Q17 0 20 3" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
          <span>Wave</span>
        </span>
        <span className="hidden sm:inline">|</span>
        <span className="flex items-center gap-1">
          <div className="h-3 w-3 rounded bg-[#00B862] flex items-center justify-center text-white text-[4px] font-bold">FM</div>
          <span>Free Money</span>
        </span>
      </div>
    </div>
  )
}
