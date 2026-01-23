import Image from 'next/image';

import Header from '@/components/header/Header';
import { tvService } from '@/services/tvService';

import RatingCircle from '../../../components/rating-circle/RatingCircle';

interface SeriesDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function SeriesDetailPage({
  params,
}: SeriesDetailPageProps) {
  const { id } = await params;
  const seriesId = parseInt(id, 10);

  const [series, credits] = await Promise.all([
    tvService.getTvById(seriesId),
    tvService.getTvCredits(seriesId),
  ]);

  const backdropUrl = series.backdrop_path
    ? `${process.env.IMG_BASE_URL}${series.backdrop_path}`
    : null;
  const posterUrl = series.poster_path
    ? `${process.env.IMG_BASE_URL}${series.poster_path}`
    : null;

  const getRatingColor = (rating: number) => {
    if (rating >= 70) return 'text-green-500';
    if (rating >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const formatRuntime = (episodeRunTime: number[]) => {
    if (episodeRunTime.length === 0) return '';
    const minutes = episodeRunTime[0];
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) return `${hours}h ${mins}m`;
    return `${mins}m`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const creators = series.created_by;
  const directors = credits.crew.filter((person) => person.job === 'Director');
  const writers = credits.crew.filter(
    (person) => person.job === 'Executive Producer' || person.job === 'Creator',
  );

  const voteAverage = Math.round(series.vote_average * 10);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative min-h-[calc(100vh-4rem)]">
        {/* Background image */}
        {backdropUrl && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <Image
              src={backdropUrl}
              alt={series.name}
              fill
              className="object-cover opacity-30"
              priority
              sizes="100vw"
            />
          </div>
        )}

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left column - Poster */}
            <div className="flex-shrink-0 lg:w-80">
              {posterUrl && (
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={posterUrl}
                    alt={series.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                  />
                </div>
              )}

              {/* Streaming CTA (placeholder) */}
              <div className="mt-6 rounded-tl-lg bg-blue-900/90 p-4 text-white">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-red-600 font-bold text-white">
                    N
                  </div>
                  <div>
                    <p className="text-sm">Ahora en retransmisión</p>
                    <button className="text-sm font-semibold hover:underline">
                      Ver ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Details */}
            <div className="flex-1 text-white">
              {/* Title and Year */}
              <h1 className="mb-2 text-4xl font-bold md:text-5xl">
                {series.name} ({new Date(series.first_air_date).getFullYear()})
              </h1>

              {/* Metadata */}
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded border border-white/50 px-2 py-1">
                  {series.adult ? 'R' : 'PG'}
                </span>
                <span>{formatDate(series.first_air_date)}</span>
                {series.origin_country.length > 0 && (
                  <>
                    <span>•</span>
                    <span>({series.origin_country[0]})</span>
                  </>
                )}
                {series.genres.length > 0 && (
                  <>
                    <span>•</span>
                    <span>{series.genres.map((g) => g.name).join(', ')}</span>
                  </>
                )}
                {series.episode_run_time.length > 0 && (
                  <>
                    <span>•</span>
                    <span>{formatRuntime(series.episode_run_time)}</span>
                  </>
                )}
              </div>

              {/* User Score */}
              <div className="mb-6 flex items-center gap-4">
                <RatingCircle voteAverage={voteAverage} />

                <div>
                  <p className="text-sm font-semibold">
                    Puntuación de usuarios
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl">😊</span>
                    <span className="text-2xl">😮</span>
                    <span className="text-2xl">🎉</span>
                    <button className="ml-2 flex items-center gap-1 rounded border border-white/50 px-3 py-1 text-sm hover:bg-white/10">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      ¿Cuál es tu vibra?
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mb-6 flex items-center gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 transition-colors hover:bg-white/10">
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 transition-colors hover:bg-white/10">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 transition-colors hover:bg-white/10">
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </button>
                <button className="flex items-center gap-2 rounded-full border-2 border-white/50 px-4 py-2 transition-colors hover:bg-white/10">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Reproducir tráiler</span>
                </button>
              </div>

              {/* Tagline */}
              {series.tagline && (
                <p className="mb-4 text-lg text-white/80 italic">
                  {series.tagline}
                </p>
              )}

              {/* Overview */}
              <div className="mb-6">
                <h2 className="mb-2 text-xl font-bold">Vista general</h2>
                <p className="leading-relaxed text-white/90">
                  {series.overview}
                </p>
              </div>

              {/* Crew */}
              <div className="space-y-4">
                {creators.length > 0 && (
                  <div>
                    {creators.map((creator) => (
                      <div key={creator.id} className="mb-2">
                        <a
                          href="#"
                          className="font-bold transition-colors hover:text-[#01b4e4]"
                        >
                          {creator.name}
                        </a>
                        <p className="text-sm text-white/70">Creator</p>
                      </div>
                    ))}
                  </div>
                )}
                {directors.length > 0 && (
                  <div>
                    {directors.slice(0, 2).map((director) => (
                      <div key={director.id} className="mb-2">
                        <a
                          href="#"
                          className="font-bold transition-colors hover:text-[#01b4e4]"
                        >
                          {director.name}
                        </a>
                        <p className="text-sm text-white/70">Director</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
