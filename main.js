"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductStore = /** @class */ (function () {
    function ProductStore() {
        this.products = [];
    }
    ProductStore.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    ProductStore.prototype.removeProduct = function (productId) {
        this.products = this.products.filter(function (product) { return product.id !== productId; });
    };
    ProductStore.prototype.listProducts = function () {
        return this.products;
    };
    ProductStore.prototype.findProduct = function (productId) {
        return this.products.find(function (product) { return product.id === productId; });
    };
    return ProductStore;
}());
var store = new ProductStore();
var product1 = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics',
    inStock: true
};
var product2 = {
    id: 2,
    name: 'Smartphone',
    price: 499.99,
    category: 'Electronics',
    inStock: false
};
store.addProduct(product1);
store.addProduct(product2);
console.log(store.listProducts());
store.removeProduct(1);
console.log(store.findProduct(2));
