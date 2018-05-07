import { ShotService } from './../services/shot.service';
import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  shot: any;

  constructor(private shotService: ShotService) { }

  // shot: Shot = this.shotService.getShot(445);

  ngOnInit() {
    // this.shot = data[2];
    this.getShotById(448);
    // console.log(this.shot);
  }
  getShotById(id: number) {
    this.shotService.getShot(id).subscribe(shot => this.shot = shot);
  }
}
