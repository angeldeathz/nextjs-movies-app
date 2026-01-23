import Image from 'next/image';
import Link from 'next/link';

import { Tv } from '../../interfaces/tv';
import RatingCircle from '../rating-circle/RatingCircle';

interface TvCardProps {
  tv: Tv;
}

export default function TvCard({ tv }: TvCardProps) {
  const imageUrl = `${process.env.IMG_BASE_URL}${tv.poster_path}`;
  const voteAverage = Math.round(tv.vote_average * 10);

  return (
    <Link href={`/series/${tv.id}`} className="group cursor-pointer">
      {/* Contenedor del poster */}
      <div className="relative mb-2 overflow-hidden rounded-lg">
        {/* Poster de la serie */}
        <div className="relative aspect-[2/3] bg-gray-200">
          <Image
            src={imageUrl}
            alt={tv.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
          />
        </div>

        {/* Rating circular en la esquina inferior izquierda */}
        <div className="absolute bottom-0 left-0 m-2">
          <RatingCircle voteAverage={voteAverage} />
        </div>

        {/* Icono de menú en la esquina superior derecha */}
        <button className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-black/70">
          <svg
            className="h-5 w-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </button>
      </div>

      {/* Título y fecha */}
      <div>
        <h3 className="mb-1 line-clamp-1 font-bold text-gray-900 transition-colors group-hover:text-[#01b4e4]">
          {tv.name}
        </h3>
        <p className="text-sm text-gray-600">{tv.first_air_date}</p>
      </div>
    </Link>
  );
}
