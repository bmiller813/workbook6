/*
a website where you can purchase goods without having to leave your home.
A store has a list of products and a list of customers.
A customer has a list of addresses.
A cart has a list of lineItems.
lineItems that have a product, a quantity and an extended price.

NOUNS (People places or things)

    Website/Store
        Name
        Catalog of goods
        Location
        Checkout

    You/Customer
        Habits, Favorites
        GetRecommendations()

    Cart
        List of Purchases (A product, Cost Each, Quantity, Total Cost)
        GetGrandTotal (Sum plus taxes)
        Checkout?
        
    Goods/Products/Services
        Name, Description
        Color, Size
        Buy/Purchase

 

    Home/Address
        line1 line2 city state zip country

ADJECTIVES (Descriptive, quantity or color, things we know or can see)

VERBS (Action Words)
    Purchase/Buy
    Leave vs Ship
*/
class Store {
    constructor() {
        this.productList = [];
        this.customerList = [];
    }
    addProduct(product) {
        this.productList.push(product)
    }
    addCustomer(customer) {
        this.productList.push(customer);
        this.currentCustomer = customer;
    }
    getCurrentCustomer() {

    }
    showList() {
        console.log("PRODUCT LIST FOR STORE:");
        this.productList.forEach(p => console.log(p))
    }
}
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString(){
        return `${this.name} ($${this.price})`;
    }
}

class LineItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    extendedPrice(){
        return this.quantity * this.product.price;
    }
    toString(){
        return this.product.toString + ` QTY: ${this.quantity} = ${this.extendedPrice().toFixed(2)}`;
    }
}
class Cart {
    constructor(name, price) {
        this.lineItemList = [];
    }
    addItem(item) {
        this.lineItemList.push(item);
    }
    showContents() {
        console.log("CART:");
        let total = 0;
        this.lineItemList.forEach(item => {
            console.log(item.toString());
            total += item.quantity * item.price;
        });
        console.log("TOTAL: " + total.toFixed(2));
    }
    checkout() {
        console.log("CHECKED OUT!")
    }
}

class Address {
    constructor(line1, city, state, zip, country) {
        this.line1 = line1;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}
class Customer {
    constructor(name) {
        this.name = name;
        this.cart = new Cart()
        this.address = undefined;
    }
    addAddress(address) {
        this.address = address;
    }
}
//CREATE TESTS FIRST
s = new Store()
s.addProduct(new Product("pencil", 0.12))
s.addProduct(new Product("pad", 1.25))
s.addCustomer(new Customer("Bryan"))
s.showList()
c = s.getCurrentCustomer()
c.cart.addItem(new LineItem(s.productList[0], 10))
c.cart.addItem(new LineItem(s.productList[1], 2))
c.cart.showContents(); //include tax and grand total
c.customer.addAddress(new Address("1234", "22nd ave", "portland", "oregan", "or", "97018", "USA"))
c.cart.checkout(c.address)





