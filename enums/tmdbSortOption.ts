export enum TMDBMovieSortOption {
  TitleAsc = 'title.asc',
  TitleDesc = 'title.desc',
  OriginalTitleAsc = 'original_title.asc',
  OriginalTitleDesc = 'original_title.desc',
  PopularityAsc = 'popularity.asc',
  PopularityDesc = 'popularity.desc',
  RevenueAsc = 'revenue.asc',
  RevenueDesc = 'revenue.desc',
  PrimaryReleaseDateAsc = 'primary_release_date.asc',
  PrimaryReleaseDateDesc = 'primary_release_date.desc',
  VoteAverageAsc = 'vote_average.asc',
  VoteAverageDesc = 'vote_average.desc',
  VoteCountAsc = 'vote_count.asc',
  VoteCountDesc = 'vote_count.desc',
}

export const sortOptionLabels: Record<TMDBMovieSortOption, string> = {
  [TMDBMovieSortOption.TitleAsc]: 'Título (A-Z)',
  [TMDBMovieSortOption.TitleDesc]: 'Título (Z-A)',
  [TMDBMovieSortOption.OriginalTitleAsc]: 'Título original (A-Z)',
  [TMDBMovieSortOption.OriginalTitleDesc]: 'Título original (Z-A)',
  [TMDBMovieSortOption.PopularityAsc]: 'Popularidad (menor a mayor)',
  [TMDBMovieSortOption.PopularityDesc]: 'Popularidad (mayor a menor)',
  [TMDBMovieSortOption.RevenueAsc]: 'Recaudación (menor a mayor)',
  [TMDBMovieSortOption.RevenueDesc]: 'Recaudación (mayor a menor)',
  [TMDBMovieSortOption.PrimaryReleaseDateAsc]:
    'Fecha de estreno (antigua a nueva)',
  [TMDBMovieSortOption.PrimaryReleaseDateDesc]:
    'Fecha de estreno (nueva a antigua)',
  [TMDBMovieSortOption.VoteAverageAsc]: 'Calificación (menor a mayor)',
  [TMDBMovieSortOption.VoteAverageDesc]: 'Calificación (mayor a menor)',
  [TMDBMovieSortOption.VoteCountAsc]: 'Número de votos (menor a mayor)',
  [TMDBMovieSortOption.VoteCountDesc]: 'Número de votos (mayor a menor)',
};

export enum TMDBTVSortOption {
  FirstAirDateAsc = 'first_air_date.asc',
  FirstAirDateDesc = 'first_air_date.desc',
  NameAsc = 'name.asc',
  NameDesc = 'name.desc',
  OriginalNameAsc = 'original_name.asc',
  OriginalNameDesc = 'original_name.desc',
  PopularityAsc = 'popularity.asc',
  PopularityDesc = 'popularity.desc',
  VoteAverageAsc = 'vote_average.asc',
  VoteAverageDesc = 'vote_average.desc',
  VoteCountAsc = 'vote_count.asc',
  VoteCountDesc = 'vote_count.desc',
}

export const tvSortOptionLabels: Record<TMDBTVSortOption, string> = {
  [TMDBTVSortOption.FirstAirDateAsc]: 'Fecha de estreno (antiguas primero)',
  [TMDBTVSortOption.FirstAirDateDesc]: 'Fecha de estreno (recientes primero)',
  [TMDBTVSortOption.NameAsc]: 'Nombre (A-Z)',
  [TMDBTVSortOption.NameDesc]: 'Nombre (Z-A)',
  [TMDBTVSortOption.OriginalNameAsc]: 'Nombre original (A-Z)',
  [TMDBTVSortOption.OriginalNameDesc]: 'Nombre original (Z-A)',
  [TMDBTVSortOption.PopularityAsc]: 'Popularidad ascendente',
  [TMDBTVSortOption.PopularityDesc]: 'Popularidad descendente',
  [TMDBTVSortOption.VoteAverageAsc]: 'Puntuación ascendente',
  [TMDBTVSortOption.VoteAverageDesc]: 'Puntuación descendente',
  [TMDBTVSortOption.VoteCountAsc]: 'Votos ascendente',
  [TMDBTVSortOption.VoteCountDesc]: 'Votos descendente',
};
