import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from '../filter.pipe';
import { OrderByPipe } from '../order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterPipe,
    OrderByPipe
  ]
})
export class CustomPipesModule { }
