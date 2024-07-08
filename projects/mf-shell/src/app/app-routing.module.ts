import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule} from  '@angular-architects/module-federation'
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  },
  {
    path: 'products',
    component: MainLayoutComponent,
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './ShoppingPagesModule'
      })
        .then(m => m.PagesModule)
  },
  {
    path: 'payment',
    component: MainLayoutComponent,
    loadChildren: ()=> import('mfPayment/PayModule').then(m => m.PayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
