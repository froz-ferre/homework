import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from '../filter.pipe';
import { OrderByPipe } from '../order-by.pipe';
import { MapPipe } from '../map.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    OrderByPipe,
    MapPipe
  ],
  exports: [
    FilterPipe,
    OrderByPipe,
    MapPipe
  ]
})
export class CustomPipesModule { }
