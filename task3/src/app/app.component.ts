import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private location: Location,
              private router:   Router) { }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

  shotsRout() {
    this.router.navigate([`/shots`]);
  }
}
