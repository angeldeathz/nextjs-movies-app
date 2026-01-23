export default function RatingCircle({ voteAverage }: { voteAverage: number }) {
  const getRatingColor = (rating: number) => {
    if (rating >= 70) return 'text-green-500';
    if (rating >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <div className="relative h-16 w-16">
      <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="#081c22"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="4"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray={`${(voteAverage / 100) * 175.9} 175.9`}
          className={getRatingColor(voteAverage)}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-lg font-bold ${getRatingColor(voteAverage)}`}>
          {voteAverage}%
        </span>
      </div>
    </div>
  );
}
