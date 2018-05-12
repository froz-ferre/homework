import { Shot, APIData } from './../model/shot';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class ShotService {

  constructor(private http: HttpClient) { }

  getShots(): Observable<Shot[]> {  // old method
    return this.http.get<APIData>('http://api.mobile.design/api/shots?page=1&per_page=450')
    .pipe(map((data: APIData /* APIData */) => data.shots));
    // data is object with keys:
    // shots: array of shots,
    // total_pages: number,
    // current_page: number
  }

  getShot(id: number): Observable<Shot> {
    return this.http.get<APIData>('http://api.mobile.design/api/shots?page=1&per_page=450')
    .pipe(map((data: APIData) => data.shots))
    .pipe(map((data: Shot[]) => {
       return data.find(el => el.id === id);
      }
    ));
  }
}


// https://www.develodesign.co.uk/news/angular/using-mouse-events-in-angular-4-5/
