import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  //apiye bağlanmak için
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44357/api/Products/getall";
  constructor(private htppClient:HttpClient) { }

  //api mize bağlanmak için
 getProducts() : Observable<ProductResponseModel>{
  return this.htppClient.get<ProductResponseModel>(this.apiUrl);
  }
 }

