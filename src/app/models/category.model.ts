export interface Category {
  id: number;
  name: string;
  description: string;
  itemCount: number;
}

export interface CreateCategoryRequest {
  name: string;
  description?: string;
}

export interface UpdateCategoryRequest {
  id: number;
  name: string;
  description?: string;
}