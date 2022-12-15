import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  //apiye bağlanmak için
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44357/api/Categories/getall";
  constructor(private htppClient:HttpClient) { }

  //api mize bağlanmak için
 getCategories() : Observable<ListResponseModel<Category>>{
  return this.htppClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
 }

