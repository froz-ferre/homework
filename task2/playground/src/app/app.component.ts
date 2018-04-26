import { Component } from '@angular/core';
import { data } from './model/jshots';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hovered = false;
  shots = data;

  hoverToggler($event) {
    return !this.hovered;
  }

  constructor() { }
}
