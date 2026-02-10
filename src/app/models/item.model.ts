export interface Item {
  id: number;
  name: string;
  price: number;
  notes: string;
  imageBase64: string;
  categoryId: number;
  categoryName: string;
}

export interface CreateItemRequest {
  name: string;
  price: number;
  notes?: string;
  image?: File;
  categoryId: number;
}

export interface UpdateItemRequest {
  id: number;
  name: string;
  price: number;
  notes?: string;
  image?: File;
}