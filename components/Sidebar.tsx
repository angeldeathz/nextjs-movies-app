// Componente Sidebar con filtros
export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 space-y-3">
      {/* Botón Ordenar */}
      <button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <span className="text-gray-700 font-medium">Ordenar</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Botón Dónde se puede ver */}
      <button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Dónde se puede ver</span>
          <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded">
            62
          </span>
        </div>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Botón Filtros */}
      <button className="w-full flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
        <span className="text-gray-700 font-medium">Filtros</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Botón Buscar */}
      <button className="w-full bg-gray-100 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
        Buscar
      </button>
    </aside>
  );
}
