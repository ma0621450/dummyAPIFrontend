import apiClient from './client';
import type { Brand } from '@/types';
import { brandSchema } from '@/lib/validators/schemas';
import { z } from 'zod';

export async function getBrands(): Promise<Brand[]> {
  const response = await apiClient.get('/brands');
  const validated = z.array(brandSchema).parse(response.data.data || response.data);
  return validated;
}
