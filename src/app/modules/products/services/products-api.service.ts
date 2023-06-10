import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';
import { GetAllResponse } from '../models/get-all-response';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsApiService {
  configUrl = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) { }

  getAll() : Observable<GetAllResponse> {
    return this.http.get<GetAllResponse> (this.configUrl);
  }

  getProductsByCategory(category:string)  : Observable<GetAllResponse>{
    return this.http.get<GetAllResponse> (`${this.configUrl}/category/${category}`);
  }

  detail(id:number) : Observable<Product> {
    return this.http.get<Product>(`${this.configUrl}/${id}`);
  }

  search(query?: string ) : Observable<GetAllResponse> {
    const options = query ? { params: new HttpParams().set('q', query.trim()) } : {};
    return this.http.get<GetAllResponse> (`${this.configUrl}/search`, options);
  }

  add(product:Product) : Observable<Product> {
    return this.http.post<Product>(`${this.configUrl}/add`,product);
  }

  edit(product:Product)  : Observable<Product> {
    return this.http.put<Product>(`${this.configUrl}/${product.id}`,product);
  }

  productCategories()  : Observable<string[]> {
    return this.http.get<string[]>(`${this.configUrl}/categories`);
  }

}
