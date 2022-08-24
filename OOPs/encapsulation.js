class A {
    #y;
    constructor() {
        this.x = undefined
        this.#y = null
    }

    display() {
        console.log(this.x)
    }

    gety() {
        console.log(this.#y)
    }

    puty(el) {
        if (el !== 'string') {
            return
        }
        this.#y = el
    }
}

const a = new A()
a.x = 10
a.y = 9
a.puty('string')
a.gety()
console.log(a);