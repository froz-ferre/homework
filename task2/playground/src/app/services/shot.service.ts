import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Shot } from '../model/shot';
import 'rxjs/add/operator/map';

@Injectable()
export class ShotService {

  constructor(private http: HttpClient) {
    http.get('../../assets/shots.json').subscribe(r => console.log(r.toString()));
   }

  getShots(): Observable<Shot[]> {
    return this.http.get('../../assets/shots.json')
    .subscribe((res: Response) => res.json());
  }
}

// CYKAAAAAAAAA!!!!