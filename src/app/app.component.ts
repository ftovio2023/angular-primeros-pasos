import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'Hola Mundo'; Forma rapida de angular
  public title: string = 'Hola Mundo'; //Forma explicita que prefiere Fernando
}
