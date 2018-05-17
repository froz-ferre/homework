import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShotListComponent } from './shot-list.component';
import { ShotComponent } from '../shot/shot.component';
import { ShotFullComponent } from '../shot-full/shot-full.component';

import { DownloadDirective } from '../directives/download.directive';
import { CustomPipesModule } from '../pipes/custom-pipes/custom-pipes.module';


const childrenRoutes: Routes = [
  {path: ':shotID', component: ShotComponent}
];

const routes: Routes = [
  {path: '', component: ShotListComponent, children: childrenRoutes},
  {path: ':shotID/full-preview', component: ShotFullComponent}
];

@NgModule({
  imports: [
    CustomPipesModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShotListComponent,
    ShotComponent,
    ShotFullComponent,
    DownloadDirective
  ]
})
export class ShotListModule { }

