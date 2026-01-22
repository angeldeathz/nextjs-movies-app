import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import Paginator from '@/components/Paginator';
import Sidebar from '@/components/Sidebar';

import { movieService } from '../services/moviesService';

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params?.page ?? '1', 10) || 1);
  const movies = await movieService.getPopularMovies(currentPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="mb-6 text-3xl font-bold text-black md:text-4xl">
          Películas populares
        </h1>
        {/* Layout: Sidebar + Grid de películas */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Sidebar izquierdo */}
          <div className="flex-shrink-0 md:w-64">
            <Sidebar />
          </div>

          {/* Grid de películas + Paginador */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            <Paginator
              currentPage={movies.page}
              totalPages={Math.min(movies.total_pages, 500)}
              basePath="/"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
