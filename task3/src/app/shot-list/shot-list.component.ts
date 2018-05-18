import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Shot } from '../model/shot';
import { ShotService } from '../services/shot.service';
import { Router } from '@angular/router';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-shot-list',
  templateUrl: './shot-list.component.html',
  styleUrls: ['./shot-list.component.css']
})
export class ShotListComponent implements OnInit {

  shots: Shot[] = [];
  shotsLoaded = false;
  @ViewChild('loadMore') loadMore: ElementRef;

  constructor(private shotService: ShotService,
              private router: Router,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.getShots();
  }

  @HostListener('window:scroll') onMyScroll() {
    /* Тут нужно обязательно подумать и реализовать
        нормальную логику AJAX запроса для подгрузки
        следующей порции шотов!!!
    */
    if (this.shotService.total_pages > 1 &&
        this.shotService.apiPage <= this.shotService.total_pages) {
      if (window.pageYOffset + window.innerHeight > this.renderer.selectRootElement('#more').offsetTop) {
        this.shotsLoaded = false;
        setTimeout(this.getShots(), 5000);
      }
    } // else unsubscribe !!!!!!!!!!!!!!! c=========3
    // setTimeout(() => console.log(this.renderer.selectRootElement('#more').offsetTop), 10000);
    // console.log(window.pageYOffset + window.innerHeight);
  }

  getShots(): void {
    // take 449 shots (without 424, because its too large!)
    // and reverse order
    this.shotService.getShots()
        .subscribe((event: HttpEvent<any>) => {
          if (event.type === HttpEventType.DownloadProgress) {
            console.log(event.loaded + ' loaded of ' + event.total);
          }
          if (event.type === HttpEventType.Response) {
            this.shots = this.shots.concat(event.body.shots); // .filter(shot => shot.id !== 424).reverse();
            this.shotService.total_pages = event.body.total_pages;
          }
          // this.shots = res.filter(shot => shot.id !== 424).reverse();
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.shotsLoaded = true;
        }
      );
  }

  someMappingFunctionForExample(shots: Shot[]) {
    // just function to show pipes work
    return shots.map(shot => {
      return {
        id: `[${shot.id}]`
      }
    });
  }

  onShotHover(event, shot: Shot): void  {
    event.target.src = shot.avatar;
  }

  onShotOver(event, shot: Shot): void  {
    event.target.src = shot.thumbnail;
  }
}
