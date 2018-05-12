import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';

// import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Возможно придется перенести директиву в shot-list.module

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // BrowserAnimationModule
  ],
  providers: [ShotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
