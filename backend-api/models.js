// Modèle Caissier
class Cashier {
    constructor(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}

// Modèle Produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Modèle Stock
class Stock {
    constructor(productId, quantity) {
        this.productId = productId;
        this.quantity = quantity;
    }
}

module.exports = { Cashier, Product, Stock };
