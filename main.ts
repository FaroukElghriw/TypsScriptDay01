

import { Product, Store } from './Product';

class ProductStore implements Store {
    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    listProducts(): Product[] {
        return this.products;
    }

    findProduct(productId: number): Product | undefined {
        return this.products.find(product => product.id === productId);
    }
}

const store = new ProductStore();

const product1: Product = {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics',
    inStock: true
};

const product2: Product = {
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
