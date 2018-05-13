import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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
  @ViewChild('downloadHelper') downloadHelper;

  constructor(private activatedRoute: ActivatedRoute,
              private shotService:    ShotService,
              private http:           HttpClient,
              private el:             ElementRef) {
    activatedRoute.params.subscribe(param => this.shotId = +param['shotID']);
  }

  ngOnInit() {
    this.shotService.getShot(this.shotId).subscribe(shot => this.shot = shot);
  }

  downloadFile() {
    this.http.get(`${this.shot.thumbnail}`, {responseType: 'blob'}).subscribe(res => {
      const link = this.downloadHelper.nativeElement;
      const url = window.URL.createObjectURL(res);
      link.href = url;
      link.download = `${this.shot.title}.jpg`;
      link.click();
      window.URL.revokeObjectURL(url);
    });
}

}
