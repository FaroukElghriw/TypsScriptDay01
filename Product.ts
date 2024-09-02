export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    inStock: boolean;
}

export interface Store {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
    listProducts: () => Product[];
    findProduct: (productId: number) => Product | undefined;
}
