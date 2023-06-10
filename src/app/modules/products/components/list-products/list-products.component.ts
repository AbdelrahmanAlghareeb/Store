import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsApiService } from '../../services/products-api.service';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit,OnDestroy {
  productId!:number
  products!:Product[]
  selectedImageIndex:number = 0
  private searchSubscription?: Subscription;
  selectedCategory!:string
  categories$! : Observable<string[]>
  private readonly searchSubject = new Subject<string | undefined>();
  searchQuery!:string
  constructor(
    private productApi:ProductsApiService,
    ){
  }
  ngOnInit() {
    this.getAllProducts()
    this.getProductCategories()
    this.searchSubscription = this.searchSubject
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((searchQuery) => this.searchProducts(searchQuery) )
    )
    .subscribe((results) => (this.products = results.products));
  }
  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }


  getAllProducts(){
    return this.productApi.getAll().subscribe(res=>{
      this.products = res.products
    })
  }
  onSearchQueryInput(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    searchQuery?.trim() ? this.searchSubject.next(searchQuery?.trim()) : this.getAllProducts();
  }
  searchProducts(searchQuery?:string){
    return this.productApi.search(searchQuery)
  }
  getProductsByCatgeories(category:string){
    this.searchQuery = ''
    this.selectedCategory = category
    this.productApi.getProductsByCategory(category).subscribe(res=>{
      this.products = res.products
    })
  }
  getProductCategories(){
    this.categories$  = this.productApi.productCategories()
  }

}
