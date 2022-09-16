class Node {
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap {
    constructor() {
        this.currSize = 2//current size of the array
        this.arr = []
        this.lambda = 0.5
        this.elements = 0 // number of elements inserted in the hashmap
        
        for (let i = 0; i < this.currSize; i++) {
            this.arr.push(null)
        }
    }
}