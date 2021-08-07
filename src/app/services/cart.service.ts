import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getCartItem(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] =[];
        
        for(let item of result) {
          let productExists = false;
          for(let index in cartItems){
            if(cartItems[index].productId === item.product.id){
              cartItems[index].qty++;
              productExists = true;
              break;
            }
          }
          
          if(!productExists) cartItems.push(new CartItem (item.id, item.product));
          
        }
        return cartItems;
      }) 
    ); 
  }

  addProductToCart = (product: Product): Observable<any> => 
    this.http.post(cartUrl, {product});
  
  
  removeProductFromCart = (product: Product) =>
    this.http.delete(cartUrl+'/'+ product);
  
}