import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Product 1',
      'This is the product 1 description',
      3100,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/Leslie-Stroller-Blue_1608002301699.jpg_w_medium'
    ),
    new Product(
      2,
      'Product 2',
      'This is the product 2 description',
      3599.75,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/Geanna-P_C-Round-Pink-1_1607951800324.jpg_w_medium'
    ),
    new Product(
      3,
      'Product 3',
      'This is the product 3 description',
      1274,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/Packshots-for-List-In_1604645623051.jpg_w_medium'
    ),
    new Product(
      4,
      'Product 4',
      'This is the product 4 description',
      124,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/diaper%20spray_1593158363524.jpg_w_medium'
    ),
    new Product(
      5,
      'Product 5',
      'This is the product 5 description',
      516,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/Uni-Love-Powder-Scent-Baby-Wipes-100_s-%286-Pack%29_1597381616010.jpg_w_medium'
    ),
    new Product(
      6,
      'Product 6',
      'This is the product 6 description',
      500,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/WK04_Anti-Colic%20BPA-Free%20%28PP%29%20Bottle%202-Pack%2011%20oz%201_1611385538673.jpg_w_medium'
    ),
    new Product(
      7,
      'Product 7',
      'This is the product 7 description',
      600,
      'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/E-Commerce02_1608706235381.jpg_w_medium'
    ),
  ];
  private postsUpdated = new Subject<Product[]>();

  constructor(private http: HttpClient) {}

  getProducts() {
    // use API here
    // populate products from an API

    // NOTE: This part is for integrating the backend part(express)
    // this.http
    //   .get<{ message: string; posts: Product[] }>(
    //     'http://localhost:3000/api/posts'
    //   )
    //   .subscribe((postData) => {
    //     this.products = postData.posts;
    //     this.postsUpdated.next([...this.products]);
    //   });
    return this.products;
  }
}
