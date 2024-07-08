import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {RouterModule, Routes} from "@angular/router";
import {CardModule} from "../../components/card/card.module";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  }
];

@NgModule({
  declarations: [
    ProductsListComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CardModule,
        MatButtonModule
    ]
})
export class ProductsListModule { }
