import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category, CreateCategoryRequest, UpdateCategoryRequest } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5022/api/categories';

  // State signals
  categories = signal<Category[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  selectedCategoryId = signal<number | null>(null);

  // Computed signals
  selectedCategory = computed(() =>
    this.categories().find(c => c.id === this.selectedCategoryId())
  );

  categoryCount = computed(() => this.categories().length);

  // Load all categories
  loadCategories(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Category[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.categories.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to load categories');
        this.loading.set(false);
      }
    });
  }

  // Get single category
  getCategory(id: number): void {
    this.http.get<Category>(`${this.apiUrl}/${id}`).subscribe({
      next: (category) => {
        // Update in the list if exists
        this.categories.update(cats => {
          const index = cats.findIndex(c => c.id === id);
          if (index >= 0) {
            const updated = [...cats];
            updated[index] = category;
            return updated;
          }
          return [...cats, category];
        });
      },
      error: (err) => this.error.set(err.message)
    });
  }

  // Create category
  createCategory(request: CreateCategoryRequest): void {
    this.loading.set(true);

    this.http.post<Category>(this.apiUrl, request).subscribe({
      next: (created) => {
        this.categories.update(cats => [...cats, created]);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to create category');
        this.loading.set(false);
      }
    });
  }

  // Update category
  updateCategory(request: UpdateCategoryRequest): void {
    this.loading.set(true);

    this.http.put<Category>(`${this.apiUrl}/${request.id}`, request).subscribe({
      next: (updated) => {
        this.categories.update(cats =>
          cats.map(c => c.id === request.id ? updated : c)
        );
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to update category');
        this.loading.set(false);
      }
    });
  }

  // Delete category
  deleteCategory(id: number): void {
    this.loading.set(true);

    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.categories.update(cats => cats.filter(c => c.id !== id));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message || 'Failed to delete category');
        this.loading.set(false);
      }
    });
  }

  // Select a category
  selectCategory(id: number | null): void {
    this.selectedCategoryId.set(id);
  }

  // Clear error
  clearError(): void {
    this.error.set(null);
  }
}