import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsApiService } from '../../services/products-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!:number
  product!:Product
  selectedImageIndex:number = 0
  constructor(
    private productApi:ProductsApiService,
    private activatedRoute:ActivatedRoute,
    ){
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      if(this.productId) this.getProductDetails()
    });
  }
  getProductDetails(){
    this.productApi.detail(this.productId).subscribe(product=>{
      this.product = product
      // setTimeout(() => {
      //   this.activeIndex = undefined
      // }, 1500);
    })
  }
  activeIndex : number | undefined = 0
}
