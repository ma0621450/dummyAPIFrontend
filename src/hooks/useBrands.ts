import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getBrands } from '@/lib/api/brands';
import type { Brand } from '@/types';

export function useBrands(
  options?: Omit<UseQueryOptions<Brand[]>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['brands'],
    queryFn: getBrands,
    staleTime: 60 * 60 * 1000, // 1 hour
    ...options,
  });
}
