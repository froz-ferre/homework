import { Routes } from '@angular/router';

import { ShotListComponent } from './shot-list/shot-list.component';
import { ShotComponent } from './shot/shot.component';
import { ShotFullComponent } from './shot-full/shot-full.component';

export const routes: Routes = [
    {path: '', redirectTo: '/shots', pathMatch: 'full'},
    {path: 'shots', component: ShotListComponent},
    {path: 'shots/:shotID', component: ShotComponent},
    {path: 'shots/:shotID/full-preview', component: ShotFullComponent}
];
