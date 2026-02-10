import { Component } from '@angular/core';
import { FooterC } from './footer-c/footer-c';
import { HeaderC } from './header-c/header-c';
import { MainLayoutC } from './main-layout-c/main-layout-c';

@Component({
  selector: 'app-praktika-ui-c',
  standalone: true,
  imports: [FooterC, HeaderC, MainLayoutC],
  templateUrl: './praktika-ui-c.html',
  styleUrl: './praktika-ui-c.css',
})
export class PraktikaUiC {

}
