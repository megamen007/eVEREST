import { Component} from '@angular/core';
import { PraktikaUiC } from './praktika-ui-c/praktika-ui-c';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [PraktikaUiC],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'my_second_app';
  description = 'Angular is pretty good tbh';
  year = 2025;


}
