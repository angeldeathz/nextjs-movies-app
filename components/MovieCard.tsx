import Image from "next/image";
import { Movie } from "../interfaces/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 70) return "bg-green-500";
    if (rating >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const imageUrl = `${process.env.IMG_BASE_URL}${movie.poster_path}`;
  console.log(imageUrl);

  return (
    <div className="group cursor-pointer">
      {/* Contenedor del poster */}
      <div className="relative mb-2 overflow-hidden rounded-lg">
        {/* Poster de la película */}
        <div className="relative aspect-[2/3] bg-gray-200">
          <Image
            src={imageUrl}
            alt={movie.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>

        {/* Rating circular en la esquina inferior izquierda */}
        <div className="absolute bottom-0 left-0 m-2">
          <div
            className={`${getRatingColor(
              movie.vote_average
            )} rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-sm shadow-lg`}
          >
            {movie.vote_average}%
          </div>
        </div>

        {/* Icono de menú en la esquina superior derecha */}
        <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Título y fecha */}
      <div>
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-[#01b4e4] transition-colors">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
}
