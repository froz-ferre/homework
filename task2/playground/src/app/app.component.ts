import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { data } from './model/jshots';
import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shots; // = data;

  constructor(private ss: ShotService) {
    this.ss.getShots()
    .subscribe(shots => {
      this.shots = shots;
    });
  }

  ngOnInit() {
    console.log(this.shots);
  }

  onShotHover(event, shot) {
    event.target.src = shot.avatar;
  }
  onShotOver(event, shot) {
    event.target.src = shot.thumbnail;
  }
}
