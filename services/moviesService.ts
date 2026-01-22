import { MoviesResponse } from '../interfaces/movie';

const API_URL = process.env.API_URL;

export const movieService = {
  getPopularMovies: async (page = 1): Promise<MoviesResponse> => {
    const res = await fetch(`${API_URL}/movie/popular?language=es-ES&page=${page}`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok) throw new Error('Error al obtener las películas');

    return res.json();
  },
};
