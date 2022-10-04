import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // Création d'un observable
  // sub = subscriber
  observable = new Observable((sub) => {
    sub.next(Math.random());
  });

  constructor() {
    // souscrire à l'observable
    this.observable.subscribe((data) => console.log(data, '1er'));
    this.observable.subscribe((data) => console.log(data, '2nd'));
  }
}
