import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  // [
  //   // { id: 1, productId: 1, productName: 'Test 1', qty: 4, price: 200 },
  //   // { id: 2, productId: 4, productName: 'Test 4', qty: 2, price: 50 },
  //   // { id: 3, productId: 3, productName: 'Test 3', qty: 3, price: 150 },
  //   // { id: 4, productId: 2, productName: 'Test 2', qty: 5, price: 100 },

  // ];

  cartTotal = 0;

  constructor(private msg: MessengerService) {}

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product | any) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    // console.log(product);

    let itemExist = false;

    // guard clause if cart has the same id
    for (let item in this.cartItems) {
      if (this.cartItems[item].productId === product.id) {
        this.cartItems[item].qty++;
        itemExist = true;
        break;
      }
    }

    // if no id is the same, push to cart
    if (!itemExist) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price,
      });
    }

    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price,
    //   });
    // } else {
    //   for (let item in this.cartItems) {
    //     if (this.cartItems[item].productId === product.id) {
    //       this.cartItems[item].qty++;
    //       break;
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price,
    //       });
    //     }
    //   }
    // }

    this.cartTotal = 0;
    this.cartItems.forEach((item: { qty: number; price: number }) => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
