import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, CreateItemRequest, UpdateItemRequest } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5022/api/items';

  // State signals
  items = signal<Item[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  filterCategoryId = signal<number | null>(null);

  // Computed signals
  filteredItems = computed(() => {
    const catId = this.filterCategoryId();
    if (catId === null) return this.items();
    return this.items().filter(i => i.categoryId === catId);
  });

  itemCount = computed(() => this.items().length);
  filteredItemCount = computed(() => this.filteredItems().length);

  // Load items (optionally filtered by category)
  loadItems(categoryId?: number): void {
    this.loading.set(true);
    this.error.set(null);

    const url = categoryId
      ? `${this.apiUrl}?categoryId=${categoryId}`
      : this.apiUrl;

    this.http.get<Item[]>(url).subscribe({
      next: (data) => {
        this.items.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to load items');
        this.loading.set(false);
      }
    });
  }

  // Get single item
  getItem(id: number): void {
    this.http.get<Item>(`${this.apiUrl}/${id}`).subscribe({
      next: (item) => {
        this.items.update(items => {
          const index = items.findIndex(i => i.id === id);
          if (index >= 0) {
            const updated = [...items];
            updated[index] = item;
            return updated;
          }
          return [...items, item];
        });
      },
      error: (err) => this.error.set(err.message)
    });
  }

  // Create item with FormData (for image upload)
  createItem(request: CreateItemRequest): void {
    this.loading.set(true);

    const formData = new FormData();
    formData.append('name', request.name);
    formData.append('price', request.price.toString());
    formData.append('categoryId', request.categoryId.toString());
    
    if (request.notes) {
      formData.append('notes', request.notes);
    }
    if (request.image) {
      formData.append('image', request.image);
    }

    this.http.post<Item>(this.apiUrl, formData).subscribe({
      next: (created) => {
        this.items.update(items => [...items, created]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to create item');
        this.loading.set(false);
      }
    });
  }

  // Update item with FormData
  updateItem(request: UpdateItemRequest): void {
    this.loading.set(true);

    const formData = new FormData();
    formData.append('id', request.id.toString());
    formData.append('name', request.name);
    formData.append('price', request.price.toString());
    
    if (request.notes) {
      formData.append('notes', request.notes);
    }
    if (request.image) {
      formData.append('image', request.image);
    }

    this.http.put<Item>(`${this.apiUrl}/${request.id}`, formData).subscribe({
      next: (updated) => {
        this.items.update(items =>
          items.map(i => i.id === request.id ? updated : i)
        );
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to update item');
        this.loading.set(false);
      }
    });
  }

  // Delete item
  deleteItem(id: number): void {
    this.loading.set(true);

    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.items.update(items => items.filter(i => i.id !== id));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to delete item');
        this.loading.set(false);
      }
    });
  }

  // Set category filter
  setFilterCategory(id: number | null): void {
    this.filterCategoryId.set(id);
  }

  // Clear error
  clearError(): void {
    this.error.set(null);
  }
}