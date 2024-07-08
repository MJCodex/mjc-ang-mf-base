import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./products-list/products-list.module').then(m => m.ProductsListModule)
  },
  {
    path: ':productId/detail',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
