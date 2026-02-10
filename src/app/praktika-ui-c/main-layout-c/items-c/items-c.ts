import { Component, inject, OnInit } from '@angular/core';
import { ItemCardC } from './item-card-c/item-card-c';
import { SearchInputsC } from './search-inputs-c/search-inputs-c';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-items-c',
  standalone: true,
  imports: [ItemCardC, SearchInputsC],
  templateUrl: './items-c.html',
  styleUrl: './items-c.css',
})
export class ItemsC implements OnInit {
  itemService = inject(ItemService);

  // Expose signals for template
  items = this.itemService.filteredItems;
  loading = this.itemService.loading;
  error = this.itemService.error;

  ngOnInit(): void {
    this.itemService.loadItems();
  }
}
