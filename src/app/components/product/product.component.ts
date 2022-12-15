import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{

  products : Product[] = [];
  dataLoaded = false;
  filterText = "";

 constructor(
  private productService : ProductService, 
  private activatedRoute:ActivatedRoute, 
  private toastrService: ToastrService,
  private cartService: CartService,
  ){} //bir servisi kullanmak için. activatedRoute -> aktifleştirilmiş root.
 //category bastığım zaman productları id göre gelmesi için.

 ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    if(params["categoryId"]){
      this.getProductsByCategory(params["categoryId"])
    }else{
      this.getProducts()
    }
  })
  
}

 //api mize bağlanmak için
 getProducts(){
  this.productService.getProducts().subscribe(response => {
    this.products = response.data
    this.dataLoaded = true;
  })
 }

 getProductsByCategory(categoryId:number){
  this.productService.getProductsByCategory(categoryId).subscribe(response => {
    this.products = response.data
    this.dataLoaded = true;
  })
 }


 addToCart(product:Product){
  this.cartService.addToCart(product);
 this.toastrService.success("Sepete Eklendi", product.productName);
 }

}
