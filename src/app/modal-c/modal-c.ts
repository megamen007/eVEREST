import { Component , EventEmitter , Input , Output } from '@angular/core';

@Component({
  selector: 'app-modal-c',
  standalone: true,
  imports: [],
  templateUrl: './modal-c.html',
  styleUrl: './modal-c.css',
})
export class ModalC {
  @Input() isOpen: boolean = false;
  @Input() title: string = 'Modal Title';
  @Output() closeModal = new EventEmitter<void>();

  close(){
    this.closeModal.emit();
  }
}
