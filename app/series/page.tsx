import TvCard from '../../components/cards/TvCard';
import Header from '../../components/Header';
import Paginator from '../../components/Paginator';
import Sidebar from '../../components/Sidebar';
import { tvService } from '../../services/tvService';

export default async function SeriesPage() {
  const series = await tvService.getPopularTvs();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="mb-6 text-3xl font-bold text-black md:text-4xl">
          Series populares
        </h1>
        {/* Layout: Sidebar + Grid de películas */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar izquierdo */}
          <div className="flex-shrink-0 md:w-64">
            <Sidebar />
          </div>

          {/* Grid de películas */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {series.results.map((tv) => (
                <TvCard key={tv.id} tv={tv} />
              ))}
            </div>
            <Paginator
              currentPage={series.page}
              totalPages={Math.min(series.total_pages, 500)}
              basePath="/"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
