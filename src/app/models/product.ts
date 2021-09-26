export class Product {
  description: string;
  price: number;
  imageUrl: string;

  constructor(
    id: number,
    name: string,
    description = '',
    price = 0,
    imageUrl = 'https://edamama-bucket.s3.ap-southeast-1.amazonaws.com/medium/WK04_Anti-Colic%20BPA-Free%20%28PP%29%20Bottle%202-Pack%2011%20oz%201_1611385538673.jpg_w_medium'
  ) {
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}
