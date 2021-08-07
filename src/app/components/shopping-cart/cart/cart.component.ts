import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];
  cartTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit(){
    this.handleSubsription();
  }

  handleSubsription = () => 
  this.msg.getMessage().subscribe(() => this.loadCartItem());

  loadCartItem() {
    this.cartService.getCartItem().subscribe((items: CartItem[]) => {
      this.cartItems = items;
    this.cartTotal = 0;
    this.cartItems.forEach((item: any) => this.cartTotal += (item.qty * item.price));  
  })}

  removeFromCart = (item:any) =>
    this.cartService.removeProductFromCart(item).subscribe(() => this.loadCartItem()
  );
}
