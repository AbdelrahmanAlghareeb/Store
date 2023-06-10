import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsApiService } from '../../services/products-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ToasterService } from 'src/app/modules/core/services/toast.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  productId!:number
  product:Product = new Product()
  categories$!:Observable<string[]>
  constructor(
    private productApi:ProductsApiService,
    private activatedRoute:ActivatedRoute,
    private toastr:ToasterService,
    private router:Router,
    ){
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      if(this.productId) this.getProductForEdit()
    });
    this.getProductCategories()
  }


  getProductForEdit(){
    this.productApi.detail(this.productId).subscribe(product=>{
      this.product = product
    })
  }
  getProductCategories(){
    this.categories$  = this.productApi.productCategories()
  }

  onSubmit(ngForm:NgForm){
    if(ngForm.invalid){
      this.toastr.error('Error','Please, complete all the required fields.')
      ngForm.form.markAllAsTouched()
      return
    }
    const req : Observable<Product> = this.productId? this.productApi.edit(this.product) : this.productApi.add(this.product)
    req.subscribe(res=>{
      this.toastr.success('Success','Saved Successfully')
      this.router.navigate(['../list'], {relativeTo: this.activatedRoute})
    })
  }
}
