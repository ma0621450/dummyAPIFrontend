import { z } from 'zod';

export const brandSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  website: z.string().nullable(),
});

export const categorySchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    parent_id: z.number().nullable(),
    children: z.array(categorySchema).optional(),
  })
);

export const variantSchema = z.object({
  sku: z.string(),
  price: z.number(),
  stock: z.number(),
  attributes: z.record(z.string(), z.string()),
  image_url: z.string().nullable(),
});

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  discounted_price: z.number(),
  total_stock: z.number(),
  is_in_stock: z.boolean(),
  image: z.string(),
  brand: brandSchema,
  category: categorySchema,
  variants: z.array(variantSchema),
});

export const paginationMetaSchema = z.object({
  current_page: z.number(),
  from: z.number(),
  last_page: z.number(),
  path: z.string(),
  per_page: z.number(),
  to: z.number(),
  total: z.number(),
});

export const paginationLinksSchema = z.object({
  first: z.string(),
  last: z.string(),
  prev: z.string().nullable(),
  next: z.string().nullable(),
});

export const paginatedResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    data: z.array(dataSchema),
    links: paginationLinksSchema,
    meta: paginationMetaSchema,
    message: z.string().optional(),
  });
