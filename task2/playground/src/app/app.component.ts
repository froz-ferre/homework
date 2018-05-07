import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  shots: Shot[];

  constructor(private shotService: ShotService) { }

  ngOnInit() {
    this.getShots();
  }

  getShots(): void {
    this.shotService.getShots()
        .subscribe(shots => {
          this.shots = shots;
        });
  }

  onShotHover(event, shot): void  {
    event.target.src = shot.avatar;
  }

  onShotOver(event, shot): void  {
    event.target.src = shot.thumbnail;
  }
}
