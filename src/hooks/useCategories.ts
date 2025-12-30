import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getCategories } from '@/lib/api/categories';
import type { Category } from '@/types';

export function useCategories(
  options?: Omit<UseQueryOptions<Category[]>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 60 * 60 * 1000, // 1 hour
    ...options,
  });
}
