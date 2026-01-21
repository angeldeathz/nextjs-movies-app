import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MovieCard from "@/components/MovieCard";
import { movieService } from "../services/moviesService";

export default async function Home() {
  const movies = await movieService.getPopularMovies();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Contenido principal */}
      <main className="container mx-auto px-4 py-8">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Películas populares
        </h1>
        {/* Layout: Sidebar + Grid de películas */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar izquierdo */}
          <div className="md:w-64 flex-shrink-0">
            <Sidebar />
          </div>

          {/* Grid de películas */}
          <div className="flex-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {movies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
