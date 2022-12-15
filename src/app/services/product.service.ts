import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  //apiye bağlanmak için
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44357/api/";
  constructor(private htppClient:HttpClient) { }

  //api mize bağlanmak için
 getProducts() : Observable<ListResponseModel<Product>>{
  let newPath = this.apiUrl + "Products/getall"
  return this.htppClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number) : Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "Products/getbycategory?categoryId="+categoryId
    return this.htppClient.get<ListResponseModel<Product>>(newPath);
    }
 }

