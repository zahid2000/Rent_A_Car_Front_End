import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { CarDetail } from 'src/app/models/catDetail';
import { CartService } from 'src/app/sevices/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[]=[];
  constructor( private cartService:CartService,private  toastrService:ToastrService) { }

  ngOnInit(): void {
  this.getCart();
  }
  getCart(){
    this.cartItems= this.cartService.list();
  }

  removeFromCart(car:CarDetail){
    this.cartService.removeFromCart(car);
this.toastrService.info("Sildiniz",car.carName)
  }
}
