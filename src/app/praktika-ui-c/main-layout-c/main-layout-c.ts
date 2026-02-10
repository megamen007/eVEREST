import { Component } from '@angular/core';
import { CategoriesC } from './categories-c/categories-c';
import { FormsPanelC } from './forms-panel-c/forms-panel-c';
import { ItemsC } from './items-c/items-c';

@Component({
  selector: 'app-main-layout-c',
  standalone: true,
  imports: [CategoriesC, FormsPanelC, ItemsC],
  templateUrl: './main-layout-c.html',
  styleUrl: './main-layout-c.css',
})
export class MainLayoutC {

}
