import { CartItem } from './../models/cartItem';
import { CartItems } from './../models/carItems';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>c.product.productId === product.productId);
    if(item){
      item.quantity +=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product:Product){
    let item:CartItem = CartItems.find(c=>c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1); //silme işlemi itemin indexinden den itibaren 1 tane sil
  }

  list():CartItem[]{
    return CartItems;
  }
}
