import { ShotService } from './../services/shot.service';
import { Component, OnInit } from '@angular/core';
import { Shot } from '../model/shot';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shot',
  templateUrl: './shot.component.html',
  styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

  shotList: Shot[];
  shot: Shot;
  shotId: number;

  constructor(private shotService:    ShotService,
              private activatedRoute: ActivatedRoute,
              private router:         Router) {
    activatedRoute.params.subscribe(param => this.shotId = +param['shotID']);
  }

  ngOnInit() {
    // get list of shots
    this.shotService.getShots().subscribe(shots => this.shotList = shots);
    this.getShotById(this.shotId);
  }
  getShotById(id: number) {
    this.shotService.getShot(id).subscribe(shot => this.shot = shot);
  }

  onChangeId(id: number) {
    this.router.navigate([`/shots/${id}`]);
    this.getShotById(id);
  }

  openFullShot() {
    this.router.navigate([`/shots/${this.shotId}/full-preview`]);
  }

  log() {
    console.log(this.shot);
  }
}
