import { MoviesResponse } from '../interfaces/movie';

const API_URL = process.env.API_URL;

export const movieService = {
  getPopularMovies: async (
    page = 1,
    sort_by?: string,
  ): Promise<MoviesResponse> => {
    const release_date = new Date().toISOString().split('T')[0];
    const res = await fetch(
      `${API_URL}/discover/movie?language=es-ES&page=${page}&sort_by=${sort_by}&release_date.lte=${release_date}&vote_count.gte=10`,
      {
        next: { revalidate: 3600 },
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
    if (!res.ok) throw new Error('Error al obtener las películas');

    return res.json();
  },
};
