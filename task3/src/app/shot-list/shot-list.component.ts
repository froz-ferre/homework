import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';
import { ShotService } from '../services/shot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})
export class ShotListComponent implements OnInit {

  shots: Shot[];

  constructor(private shotService: ShotService,
              private router: Router) { }

  ngOnInit() {
    this.getShots();
  }

  getShots(): void {
    // take 449 shots (without 424, because its too large!)
    // and reverse order
    this.shotService.getShots()
        .subscribe(res => {
          this.shots = res.filter(shot => shot.id !== 424).reverse();
        });
  }

  onShotHover(event, shot: Shot): void  {
    event.target.src = shot.avatar;
  }

  onShotOver(event, shot: Shot): void  {
    event.target.src = shot.thumbnail;
  }

}
