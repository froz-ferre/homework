import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotComponent } from './shot/shot.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShotComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [ShotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
