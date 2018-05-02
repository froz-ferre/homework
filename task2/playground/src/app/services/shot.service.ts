import { Shot } from './../model/shot';
import { data } from './../model/jshots';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ShotService {

  shots;

  constructor(private http: HttpClient) {
    // http.get('../../assets/shots.json').subscribe(r => console.log(r.toString()));
   }

  getShots(): Observable<any> {
    return this.http.get('../../assets/shots.json');
    // .map((res: Response) => res.json())
    // .subscribe(data => {
    //   this.shots.push(data);
    // });
    // .map((res: Response) => res.json());
  }
}

// https://www.develodesign.co.uk/news/angular/using-mouse-events-in-angular-4-5/