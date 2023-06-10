import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
];
export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always'
};

@NgModule({
  imports: [ RouterModule.forRoot( routes, routingConfiguration ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
