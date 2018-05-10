import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shot } from '../model/shot';
import { ShotService } from '../services/shot.service';

@Component({
  selector: 'app-shot-full',
  templateUrl: './shot-full.component.html',
  styleUrls: ['./shot-full.component.css']
})
export class ShotFullComponent implements OnInit {

  shotId: number;
  shot: Shot;

  constructor(private activatedRoute: ActivatedRoute,
              private shotService:    ShotService) {
    activatedRoute.params.subscribe(param => this.shotId = +param['shotID']);
  }

  ngOnInit() {
    this.shotService.getShot(this.shotId).subscribe(shot => this.shot = shot);
  }

}
