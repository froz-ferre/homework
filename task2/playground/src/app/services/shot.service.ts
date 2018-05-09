import { Shot } from './../model/shot';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class ShotService {

  constructor(private http: HttpClient) { }

  getShots(): Observable<Shot[]> {  // old method
    return this.http.get<Shot[]>('../../assets/shots.json');
  }

  getShot(id: number): Observable<Shot> {
    return this.http.get<Shot[]>('../../assets/shots.json')
    .pipe(map(data => {
       return data.find(el => el.id === id);
    }));
  }
}

// https://www.develodesign.co.uk/news/angular/using-mouse-events-in-angular-4-5/
