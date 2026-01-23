import TvCard from '../../components/cards/TvCard';
import Header from '../../components/Header';
import Paginator from '../../components/Paginator';
import Sidebar from '../../components/Sidebar';
import { SearchProps } from '../../interfaces/searchProps';
import { tvService } from '../../services/tvService';

export default async function SeriesPage({ searchParams }: SearchProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params?.page ?? '1', 10) || 1);
  const series = await tvService.getPopularTvs(currentPage);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-black md:text-4xl">
          Series populares
        </h1>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-shrink-0 md:w-64">
            <Sidebar />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {series.results.map((tv) => (
                <TvCard key={tv.id} tv={tv} />
              ))}
            </div>
            <Paginator
              currentPage={series.page}
              totalPages={Math.min(series.total_pages, 500)}
              basePath="/series"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
