import { HoverDirective } from './directives/hover.directive';
import { Shot } from './model/shot';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotComponent } from './shot/shot.component';


@NgModule({
  declarations: [
    AppComponent,
    ShotComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ShotComponent]
})
export class AppModule { }
