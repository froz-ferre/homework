import { Shot } from './../model/shot';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';;

@Injectable()
export class ShotService {

  constructor(private http: HttpClient) { }


  getShots(): Observable<Shot[]> {  // old method
    return this.http.get<Shot[]>('../../assets/shots.json')
    .pipe();
  }

  getShot(id: number): Observable<Shot> {
    return this.http.get<Shot>('../../assets/shots.json')
    .pipe(
    filter(shot => shot.id === id));
    // .pipe(map(d => d.json()).filter(data => data.id === id));
    //  .filter((shot: Shot) => shot.id === id);
  }
}

// https://www.develodesign.co.uk/news/angular/using-mouse-events-in-angular-4-5/