import { Component, Renderer2, ElementRef } from '@angular/core';
import { data } from './model/jshots';
import { ShotService } from './services/shot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  shots = data;

  constructor(private s: ShotService) { }

  onShotHover(event, shot) {
    event.target.src = shot.avatar;
    console.log(event.target);
  }
  onShotOver(event, shot) {
    event.target.src = shot.thumbnail;
  }
}
