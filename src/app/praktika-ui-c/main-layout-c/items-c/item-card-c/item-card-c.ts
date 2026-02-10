import { Component, inject, input } from '@angular/core';
import { ItemCardImageC } from './item-card-image-c/item-card-image-c';
import { ModalC } from '../../../../modal-c/modal-c';
import { Item } from '../../../../models/item.model';
import { ItemService } from '../../../../services/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-card-c',
  standalone: true,
  imports: [ItemCardImageC, ModalC, FormsModule],
  templateUrl: './item-card-c.html',
  styleUrl: './item-card-c.css',
})
export class ItemCardC {
  private itemService = inject(ItemService);

  // Input signal
  item = input.required<Item>();

  // Local state
  isDeleteModalOpen = false;
  isEditModalOpen = false;
  editName = '';
  editPrice = 0;
  editNotes = '';
  editImage: File | null = null;

  openDeleteModal(): void {
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal(): void {
    this.isDeleteModalOpen = false;
  }

  openEditModal(): void {
    this.editName = this.item().name;
    this.editPrice = this.item().price;
    this.editNotes = this.item().notes || '';
    this.editImage = null;
    this.isEditModalOpen = true;
  }

  closeEditModal(): void {
    this.isEditModalOpen = false;
  }

  confirmDelete(): void {
    this.itemService.deleteItem(this.item().id);
    this.closeDeleteModal();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.editImage = input.files[0];
    }
  }

  saveEdit(): void {
    this.itemService.updateItem({
      id: this.item().id,
      name: this.editName,
      price: this.editPrice,
      notes: this.editNotes,
      image: this.editImage || undefined
    });
    this.closeEditModal();
  }
}
