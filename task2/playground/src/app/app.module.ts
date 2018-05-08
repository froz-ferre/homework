import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ShotComponent } from './shot/shot.component';
import { HttpClientModule } from '@angular/common/http';
import { ShotListComponent } from './shot-list/shot-list.component';

import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { ShotFullComponent } from './shot-full/shot-full.component';

@NgModule({
  declarations: [
    AppComponent,
    ShotComponent,
    ShotListComponent,
    ShotFullComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // BrowserAnimationModule
  ],
  providers: [ShotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
