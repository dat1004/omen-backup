import Product from "./Product.js";

export default class Food extends Product {
  taste;

  constructor(id, name, price, manufacturer, importedDate, taste) {
    super(id, name, price, manufacturer, 0.1, importedDate);
    this.taste = taste;
  }
}
