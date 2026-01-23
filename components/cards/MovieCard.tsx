import Image from 'next/image';

import { Movie } from '../../interfaces/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const getRatingColor = (rating: number) => {
    if (rating >= 70) return 'bg-green-500';
    if (rating >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const imageUrl = `${process.env.IMG_BASE_URL}${movie.poster_path}`;

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
              movie.vote_average,
            )} flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg`}
          >
            {movie.vote_average}%
          </div>
        </div>

        {/* Icono de menú en la esquina superior derecha */}
        <button className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70">
          <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Título y fecha */}
      <div>
        <h3 className="mb-1 line-clamp-1 font-bold text-gray-900 transition-colors group-hover:text-[#01b4e4]">
          {movie.title}
        </h3>
        <p className="text-sm text-gray-600">{movie.release_date}</p>
      </div>
    </div>
  );
}
