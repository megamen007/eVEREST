import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../../../../services/item.service';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-add-items-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-items-c.html',
  styleUrl: './add-items-c.css',
})
export class AddItemsC {
  private itemService = inject(ItemService);
  private categoryService = inject(CategoryService);

  name = '';
  price: number = 0;
  notes = '';
  categoryId: number | null = null;
  selectedFile: File | null = null;

  loading = this.itemService.loading;
  categories = this.categoryService.categories;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (!this.name.trim() || this.categoryId === null) return;

    this.itemService.createItem({
      name: this.name,
      price: this.price,
      notes: this.notes,
      categoryId: this.categoryId,
      image: this.selectedFile || undefined
    });

    // Reset form
    this.name = '';
    this.price = 0;
    this.notes = '';
    this.categoryId = null;
    this.selectedFile = null;
  }
}