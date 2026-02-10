import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-add-categories-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-categories-c.html',
  styleUrl: './add-categories-c.css',
})
export class AddCategoriesC {
  private categoryService = inject(CategoryService);

  name = '';
  description = '';

  loading = this.categoryService.loading;

  onSubmit(): void {
    if (!this.name.trim()) return;

    this.categoryService.createCategory({
      name: this.name,
      description: this.description
    });

    // Reset form
    this.name = '';
    this.description = '';
  }
}