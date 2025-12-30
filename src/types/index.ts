export interface Brand {
  id: number;
  name: string;
  slug: string;
  website: string | null;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  parent_id: number | null;
  children?: Category[];
}

export interface Variant {
  sku: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
  image_url: string | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discounted_price: number;
  total_stock: number;
  is_in_stock: boolean;
  image: string;
  brand: Brand;
  category: Category;
  variants: Variant[];
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface PaginationLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
  message?: string;
}

export interface ProductsParams {
  page?: number;
  per_page?: number;
  sort?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc' | 'newest';
  price_min?: number;
  price_max?: number;
  brand?: string;
  category?: string;
  q?: string;
}
