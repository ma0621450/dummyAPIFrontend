import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { getProducts, getProduct } from '@/lib/api/products';
import type { Product, PaginatedResponse, ProductsParams } from '@/types';

export function useProducts(
  params?: ProductsParams,
  options?: Omit<UseQueryOptions<PaginatedResponse<Product>>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => getProducts(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
}

export function useProduct(
  slug: string,
  options?: Omit<UseQueryOptions<Product>, 'queryKey' | 'queryFn'>
) {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProduct(slug),
    staleTime: 5 * 60 * 1000,
    enabled: !!slug,
    ...options,
  });
}
