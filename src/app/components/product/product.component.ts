import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/models/productResponseModel';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{

  products : Product[] = [];
  dataLoaded = false;

 constructor(private productService : ProductService){} //bir servisi kullanmak için

 ngOnInit(): void {
  this.getProducts()
}

 //api mize bağlanmak için
 getProducts(){
  this.productService.getProducts().subscribe(response => {
    this.products = response.data
    this.dataLoaded = true;
  })
 }
}
