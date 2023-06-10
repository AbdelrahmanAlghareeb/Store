import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path : 'list', component:ListProductsComponent },
  { path : 'add', component:AddProductsComponent },
  { path : 'edit/:id', component:AddProductsComponent },
  { path : 'details/:id', component:ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
