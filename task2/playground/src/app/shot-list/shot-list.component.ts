import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';
import { ShotService } from '../services/shot.service';

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})
export class ShotListComponent implements OnInit {

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
