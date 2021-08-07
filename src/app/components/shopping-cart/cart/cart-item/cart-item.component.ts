import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  @Output() removeItemFromCart = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(item:any){
    this.removeItemFromCart.emit(item);
  }
}
