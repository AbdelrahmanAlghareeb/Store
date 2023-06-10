import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsApiService } from './services/products-api.service';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListProductsComponent,
    AddProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    NgxMaskDirective,
  ],
  providers:[
    ProductsApiService
  ]
})
export class ProductsModule { }
