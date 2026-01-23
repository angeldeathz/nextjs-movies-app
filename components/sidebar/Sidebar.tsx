'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import {
  sortOptionLabels,
  TMDBMovieSortOption,
  TMDBTVSortOption,
  tvSortOptionLabels,
} from '@/enums/tmdbSortOption';

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState<TMDBMovieSortOption | null>(
    (searchParams.get('sort_by') as TMDBMovieSortOption) || null,
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSortSelect = (option: TMDBMovieSortOption) => {
    setSelectedSort(option);
    setIsSortOpen(false);
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort_by', selectedSort?.toString() ?? '');
    params.set('page', '1');
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortOpen(false);
      }
    };

    if (isSortOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSortOpen]);

  return (
    <aside className="w-full space-y-3 md:w-64">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
        >
          <span className="font-medium text-gray-700">
            {selectedSort
              ? pathname === '/'
                ? sortOptionLabels[selectedSort as TMDBMovieSortOption]
                : tvSortOptionLabels[
                    selectedSort as unknown as TMDBTVSortOption
                  ]
              : 'Ordenar'}
          </span>
          <svg
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isSortOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {isSortOpen && (
          <div className="absolute top-full right-0 left-0 z-10 mt-1 max-h-64 overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
            {Object.values(
              pathname === '/' ? TMDBMovieSortOption : TMDBTVSortOption,
            ).map((option) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                  selectedSort === option
                    ? 'bg-gray-100 font-medium text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {pathname === '/'
                  ? sortOptionLabels[option as TMDBMovieSortOption]
                  : tvSortOptionLabels[option as TMDBTVSortOption]}
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Dónde se puede ver</span>
          <span className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
            62
          </span>
        </div>
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md">
        <span className="font-medium text-gray-700">Filtros</span>
        <svg
          className="h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <button
        className={`w-full cursor-pointer rounded-lg px-4 py-3 font-medium transition-colors ${selectedSort ? 'bg-blue-500 text-white hover:bg-blue-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        onClick={handleSearch}
      >
        Buscar
      </button>
    </aside>
  );
}
