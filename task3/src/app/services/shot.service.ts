import { Shot, APIData } from './../model/shot';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class ShotService {

  apiUrlFull = 'http://api.mobile.design/api/shots?page=1&per_page=450';
  apiUrl     = 'http://api.mobile.design/api/shots';
  apiPage = 1;
  total_pages: number;

  constructor(private http: HttpClient) { }

  getShots(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {observe: 'events',
                                            reportProgress: true});
  }

  // getShots(): Observable<Shot[]> {  // old method
  //   return this.http.get<APIData>(this.apiUrl, )
  //   .pipe(map((data: APIData /* APIData */) => data.shots));
  //   // data is object with keys:
  //   // shots: array of shots,
  //   // total_pages: number,
  //   // current_page: number
  // }

  getShot(id: number): Observable<Shot> {
    return this.http.get<APIData>(this.apiUrlFull)
    .pipe(map((data: APIData) => data.shots))
    .pipe(map((data: Shot[]) => {
       return data.find(el => el.id === id);
      }
    ));
  }
}

// https://www.develodesign.co.uk/news/angular/using-mouse-events-in-angular-4-5/
