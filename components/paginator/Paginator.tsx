import Link from 'next/link';

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

function getPageNumbers(
  currentPage: number,
  totalPages: number,
): (number | 'ellipsis')[] {
  const maxVisible = 5;
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | 'ellipsis')[] = [];
  let start = Math.max(1, currentPage - 1);
  let end = Math.min(totalPages, currentPage + 1);

  if (currentPage <= 2) {
    end = Math.min(maxVisible, totalPages);
  } else if (currentPage >= totalPages - 1) {
    start = Math.max(1, totalPages - maxVisible + 1);
  }

  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push('ellipsis');
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages) {
    if (end < totalPages - 1) pages.push('ellipsis');
    pages.push(totalPages);
  }

  return pages;
}

export default function Paginator({
  currentPage,
  totalPages,
  basePath = '/',
}: PaginatorProps) {
  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const linkClass = (isActive: boolean) =>
    `min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg border font-medium transition-colors ${
      isActive
        ? 'bg-[#032541] text-white border-[#032541]'
        : 'bg-white text-gray-700 border-gray-200 hover:border-[#01b4e4] hover:text-[#01b4e4] hover:bg-gray-50'
    }`;

  const buildHref = (page: number) => {
    const params = new URLSearchParams();
    if (page > 1) params.set('page', String(page));
    const query = params.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2 py-8"
      aria-label="Paginación"
    >
      {prevPage ? (
        <Link
          href={buildHref(prevPage)}
          className={`${linkClass(false)} gap-1.5 px-4`}
          aria-label="Página anterior"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Anterior
        </Link>
      ) : (
        <span
          className="flex h-10 min-w-[2.5rem] cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100 px-4 font-medium text-gray-400"
          aria-disabled="true"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Anterior
        </span>
      )}

      <div className="flex items-center gap-2">
        {pageNumbers.map((item, index) =>
          item === 'ellipsis' ? (
            <span
              key={`ellipsis-${index}`}
              className="flex h-10 min-w-[2.5rem] items-center justify-center text-gray-400"
            >
              …
            </span>
          ) : (
            <Link
              key={item}
              href={buildHref(item)}
              className={linkClass(item === currentPage)}
              aria-label={`Página ${item}`}
              aria-current={item === currentPage ? 'page' : undefined}
            >
              {item}
            </Link>
          ),
        )}
      </div>

      {nextPage ? (
        <Link
          href={buildHref(nextPage)}
          className={`${linkClass(false)} gap-1.5 px-4`}
          aria-label="Página siguiente"
        >
          Siguiente
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      ) : (
        <span
          className="flex h-10 min-w-[2.5rem] cursor-not-allowed items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-gray-100 px-4 font-medium text-gray-400"
          aria-disabled="true"
        >
          Siguiente
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}

      <span className="mt-2 w-full text-center text-sm text-gray-500 md:mt-0 md:ml-2 md:w-auto">
        Página {currentPage} de {totalPages}
      </span>
    </nav>
  );
}
