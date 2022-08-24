class Product {
    constructor(n, p) {
        console.log("Constructor is being called directly from the class name");
        // constructor will be the first function to be called for creating an object
        this.name = n;
        this.price = p;
    }

    displayProduct() {
        console.log(`The name of the product is ${this.name}`)
        console.log(`The price of the product is ${this.price}`)
    }

    buyProduct() {

    }
}

// let iphone = new Product('Iphone', 100000)
// iphone.displayProduct()

class ComplexNumbers {
    constructor(rnum, inum) {
        this.real = rnum;
        this.imag = inum
    }

    add(c) {
        this.real += c.real;
        this.imag += c.imag
    }

    display() {
        console.log(`${this.real} + i${this.imag}`);
    }
}

let c1 = new ComplexNumbers(5, 3)
let c2 = new ComplexNumbers(4, 5)

// c1.add(c2)
// c1.display()

function product(n, p) {
    console.log(`Beginning of the function`, this)
    this.name = n;
    this.price = p;
    console.log(`End of the function`, this);
    return 100
}

const ip = new product('a', 10)
console.log(ip);