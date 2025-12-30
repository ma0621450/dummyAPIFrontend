import apiClient from './client';
import type { Category } from '@/types';
import { categorySchema } from '@/lib/validators/schemas';
import { z } from 'zod';

export async function getCategories(): Promise<Category[]> {
  const response = await apiClient.get('/categories');
  const validated = z.array(categorySchema).parse(response.data.data || response.data);
  return validated;
}
