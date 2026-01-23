import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#032541] text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">TMDB</span>
              <div className="h-3 w-3 rounded-full bg-[#01b4e4]"></div>
            </div>
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/" className="transition-colors hover:text-[#01b4e4]">
                Películas
              </Link>
              <Link href="/series" className="transition-colors hover:text-[#01b4e4]">
                Series
              </Link>

              <a href="#" className="transition-colors hover:text-[#01b4e4]">
                Gente
              </a>
              <a href="#" className="transition-colors hover:text-[#01b4e4]">
                Más
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10">
              <span className="text-xl">+</span>
            </button>
            <button className="rounded px-3 py-1 transition-colors hover:bg-white/10">
              ES
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10">
              <svg
                className="h-5 w-5"
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
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30">
              <span className="text-sm font-semibold">A</span>
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10">
              <svg
                className="h-5 w-5"
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
