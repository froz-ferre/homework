import { ShotService } from './../services/shot.service';
import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  shot: Shot;

  constructor(private shotService: ShotService) { }

  ngOnInit() {
    this.getShotById(448);
  }
  getShotById(id: number) {
    this.shotService.getShot(id).subscribe(shot => this.shot = shot);
  }

  log() {
    console.log(this.shot);
  }
}
