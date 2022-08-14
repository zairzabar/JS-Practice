class A { // parent class
    constructor() { // parent constructor
        this.x = 8;
    }

    display() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super(); // inheriting the parent constructor
        this.y = 10
    }
}

class C extends A {
    constructor() {
        super();  // inheriting the parent constructor
        this.z = 9
    }
}

const bObj = new B()
const cObj = new C()

console.log(bObj);
console.log(cObj);