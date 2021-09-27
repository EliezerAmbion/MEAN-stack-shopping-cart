import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // check if it is working
    // console.log(this.productService.getProducts());

    this.productList = this.productService.getProducts();
  }
}
