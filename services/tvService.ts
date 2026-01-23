import { TvResponse } from '../interfaces/tv';
import { TvCredits, TvDetail } from '../interfaces/tvDetail';

const API_URL = process.env.API_URL;

export const tvService = {
  getPopularTvs: async (page = 1, sort_by?: string): Promise<TvResponse> => {
    const first_air_date = new Date().toISOString().split('T')[0];
    const res = await fetch(
      `${API_URL}/discover/tv?language=es-ES&page=${page}&sort_by=${sort_by}&first_air_date.lte=${first_air_date}&vote_count.gte=50`,
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

  getTvById: async (id: number): Promise<TvDetail> => {
    const res = await fetch(`${API_URL}/tv/${id}?language=es-ES`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok) throw new Error('Error al obtener los detalles de la serie');

    return res.json();
  },

  getTvCredits: async (id: number): Promise<TvCredits> => {
    const res = await fetch(`${API_URL}/tv/${id}/credits?language=es-ES`, {
      next: { revalidate: 3600 },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    if (!res.ok) throw new Error('Error al obtener el reparto de la serie');

    return res.json();
  },
};
