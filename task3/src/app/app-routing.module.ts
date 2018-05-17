import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShotListComponent } from './shot-list/shot-list.component';
import { ShotComponent } from './shot/shot.component';
import { ShotFullComponent } from './shot-full/shot-full.component';

const routes: Routes = [
    {path: '', redirectTo: '/shots', pathMatch: 'full'},
    {path: 'shots', loadChildren: './shot-list/shot-list.module#ShotListModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
