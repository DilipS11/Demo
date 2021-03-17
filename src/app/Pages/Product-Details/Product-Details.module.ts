import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './Product-Details-routing.module';
import { ProductDetailsComponent } from './page/Product-Details/Product-Details.component';


@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
