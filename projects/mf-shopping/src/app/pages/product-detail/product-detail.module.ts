import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "../../components/card/card.module";
import {ProductDetailComponent} from "./product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  }
];

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule
  ]
})
export class ProductDetailModule { }
