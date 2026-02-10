import { Component, inject, input } from '@angular/core';
import { ModalC } from '../../../../modal-c/modal-c';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { ItemService } from '../../../../services/item.service';

@Component({
  selector: 'app-category-card-c',
  standalone: true,
  imports: [ModalC],
  templateUrl: './category-card-c.html',
  styleUrl: './category-card-c.css',
})
export class CategoryCardC {
  private categoryService = inject(CategoryService);
  private itemService = inject(ItemService);

  // Input signal
  category = input.required<Category>();

  // Local state
  isDeleteModalOpen = false;
  isEditModalOpen = false;
  editName = '';
  editDescription = '';

  openDeleteModal(): void {
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  openEditModal(): void {
    this.editName = this.category().name;
    this.editDescription = this.category().description || '';
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  confirmDelete(): void {
    this.categoryService.deleteCategory(this.category().id);
    this.closeDeleteModal();
  }

  saveEdit(): void {
    this.categoryService.updateCategory({
      id: this.category().id,
      name: this.editName,
      description: this.editDescription
    });
    this.closeEditModal();
  }

  selectCategory(): void {
    this.categoryService.selectCategory(this.category().id);
    this.itemService.loadItems(this.category().id);
  }
}