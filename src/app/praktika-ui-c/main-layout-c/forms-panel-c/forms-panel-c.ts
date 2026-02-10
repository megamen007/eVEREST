import { Component } from '@angular/core';
import { AddCategoriesC } from './add-categories-c/add-categories-c';
import { AddItemsC } from './add-items-c/add-items-c';

@Component({
  selector: 'app-forms-panel-c',
  standalone: true,
  imports: [AddCategoriesC , AddItemsC],
  templateUrl: './forms-panel-c.html',
  styleUrl: './forms-panel-c.css',
})
export class FormsPanelC {

}
