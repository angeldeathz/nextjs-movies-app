import { TvResponse } from '../interfaces/tv';

const API_URL = process.env.API_URL;

export const tvService = {
  getPopularTvs: async (): Promise<TvResponse> => {
    const res = await fetch(`${API_URL}/tv/popular?language=es-ES&page=1`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok) throw new Error('Error al obtener las series');

    return res.json();
  },
};
