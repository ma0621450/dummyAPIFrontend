import apiClient from './client';
import type { Product, PaginatedResponse, ProductsParams } from '@/types';
import { productSchema, paginatedResponseSchema } from '@/lib/validators/schemas';

export async function getProducts(params?: ProductsParams): Promise<PaginatedResponse<Product>> {
  const response = await apiClient.get('/products', { params });
  const validated = paginatedResponseSchema(productSchema).parse(response.data);
  return validated;
}

export async function getProduct(slug: string): Promise<Product> {
  const response = await apiClient.get(`/products/${slug}`);
  const validated = productSchema.parse(response.data.data || response.data);
  return validated;
}

export async function getProductVariants(id: number) {
  const response = await apiClient.get(`/products/${id}/variants`);
  return response.data;
}

export async function getProductVariant(id: number, sku: string) {
  const response = await apiClient.get(`/products/${id}/variants/${sku}`);
  return response.data;
}
