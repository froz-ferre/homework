import { data } from '../model/jshots';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  constructor() { }
  shot = data[0];

  // shot: Shot = this.shotService.getShot(445);

  ngOnInit() {
    console.log(this.shot);
  }
}
