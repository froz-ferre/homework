import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';
import { ShotService } from '../services/shot.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})
export class ShotListComponent implements OnInit {

  shots: Shot[];
  progr = 0;

  constructor(private shotService: ShotService,
              private router: Router) { }

  ngOnInit() {
    this.getShots();
  }

  getShots(): void {
    // take 449 shots (without 424, because its too large!)
    // and reverse order
    this.shotService.getShots()
        .subscribe((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.DownloadProgress) {
            this.progr = Math.round(100 * event.loaded / 162532);
            console.log(event.loaded + ' loaded of ' + event.total);
          }
          if (event.type === HttpEventType.Response) {
            this.shots = event.body.shots.filter(shot => shot.id !== 424).reverse();
          }
          // this.shots = res.filter(shot => shot.id !== 424).reverse();
        });
  }

  onShotHover(event, shot: Shot): void  {
    event.target.src = shot.avatar;
  }

  onShotOver(event, shot: Shot): void  {
    event.target.src = shot.thumbnail;
  }

}
