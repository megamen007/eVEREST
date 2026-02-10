import { Component, inject, OnInit } from '@angular/core';
import { CategoryCardC } from './category-card-c/category-card-c';
import { SearchInputsC } from './search-inputs-c/search-inputs-c';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories-c',
  standalone: true,
  imports: [CategoryCardC, SearchInputsC],
  templateUrl: './categories-c.html',
  styleUrl: './categories-c.css',
})
export class CategoriesC implements OnInit {
  categoryService = inject(CategoryService);

  // Expose signals for template
  categories = this.categoryService.categories;
  loading = this.categoryService.loading;
  error = this.categoryService.error;

  ngOnInit(): void {
    this.categoryService.loadCategories();
  }
}
