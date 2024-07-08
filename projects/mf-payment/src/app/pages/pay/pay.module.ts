import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonsLibModule} from "@commons-lib";

const routes: Routes = [
  {
    path: '',
    component: PayComponent
  }
];
@NgModule({
  declarations: [
    PayComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonsLibModule
    ]
})
export class PayModule { }
