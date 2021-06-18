import Product from "./Product.js";

export default class Store {
  products;
  soldProducts;
  revenue;

  constructor() {
    this.products = [];
    this.soldProducts = [];
    this.revenue = 0;
  }

  import(product) {
    if (product instanceof Product) {
      this.products.push(product);
    } else {
      console.log("not a product");
    }
  }

  sell(product) {
    // //find product with ID is ProductID
    // let found = null;
    // let index = -1;
    // for (let i = 0; i < this.products.length; i++) {
    //   if (this.products[i].id == productId) {
    //     found = this.products[i];
    //     index = i;
    //     break;
    //   }
    // }

    // //if found => add to soldProducts
    // if (found != null) {
    //   this.soldProducts.push(found);
    //   this.products.splice(index, 1);
    //   this.revenue += found.price * (1 - found.sale);
    // }

    //delete from roducts
    //add to revenue

    //findIndex - ES6
    //index >= 0 neu tim thay phan tu; =-1 neu ko tim thay
    let index = this.products.findIndex(function (product) {
      return product.id == productId;
    });

    if (index >= 0) {
      let product = this.products[index];
      this.soldProducts.push(product);
      this.products.splice(index, 1);
      this.revenue += product.price * (1 - product.sale);
    }
  }

  checkRevenue() {
    return this.revenue;
  }
}
