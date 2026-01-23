import { TvResponse } from '../interfaces/tv';

const API_URL = process.env.API_URL;

export const tvService = {
  getPopularTvs: async (page = 1, sort_by?: string): Promise<TvResponse> => {
    const first_air_date = new Date().toISOString().split('T')[0];
    const res = await fetch(
      `${API_URL}/discover/tv?language=es-ES&page=${page}&sort_by=${sort_by}&first_air_date.lte=${first_air_date}&vote_count.gte=10`,
      {
        next: { revalidate: 3600 },
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
    if (!res.ok) throw new Error('Error al obtener las series');

    return res.json();
  },
};
