import { MoviesResponse } from '../interfaces/movie';
import { MovieCredits, MovieDetail } from '../interfaces/movieDetail';

const API_URL = process.env.API_URL;

export const movieService = {
  getPopularMovies: async (
    page = 1,
    sort_by?: string,
  ): Promise<MoviesResponse> => {
    const release_date = new Date().toISOString().split('T')[0];
    const res = await fetch(
      `${API_URL}/discover/movie?language=es-ES&page=${page}&sort_by=${sort_by}&release_date.lte=${release_date}&vote_count.gte=100`,
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

  getMovieById: async (id: number): Promise<MovieDetail> => {
    const res = await fetch(`${API_URL}/movie/${id}?language=es-ES`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok)
      throw new Error('Error al obtener los detalles de la película');

    return res.json();
  },

  getMovieCredits: async (id: number): Promise<MovieCredits> => {
    const res = await fetch(`${API_URL}/movie/${id}/credits?language=es-ES`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok) throw new Error('Error al obtener el reparto de la película');

    return res.json();
  },
};
