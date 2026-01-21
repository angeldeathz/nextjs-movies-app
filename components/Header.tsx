// Componente Header/Navbar
export default function Header() {
  return (
    <header className="bg-[#032541] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y navegación izquierda */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">TMDB</span>
              <div className="w-3 h-3 rounded-full bg-[#01b4e4]"></div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="hover:text-[#01b4e4] transition-colors">
                Películas
              </a>
              <a href="#" className="hover:text-[#01b4e4] transition-colors">
                Series
              </a>
              <a href="#" className="hover:text-[#01b4e4] transition-colors">
                Gente
              </a>
              <a href="#" className="hover:text-[#01b4e4] transition-colors">
                Más
              </a>
            </nav>
          </div>

          {/* Iconos derecha */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <span className="text-xl">+</span>
            </button>
            <button className="px-3 py-1 rounded hover:bg-white/10 transition-colors">
              ES
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors">
              <span className="text-sm font-semibold">A</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
