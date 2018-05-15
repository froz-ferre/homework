import { ShotService } from './services/shot.service';
import { Shot } from './model/shot';

// import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShotApiInterceptor } from './interceptors/shot.api.interceptor';

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
  providers: [ShotService,
    {provide: HTTP_INTERCEPTORS,
    useClass: ShotApiInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
