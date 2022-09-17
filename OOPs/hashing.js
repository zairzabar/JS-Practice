class Node { // to create new nodes of the linked list
    constructor(k, v) {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap {
    constructor() {
        this.currSize = 2//current size of the array
        this.arr = [] // empty array
        this.lambda = 0.5 // lambda factor
        this.elements = 0 // number of elementss inserted in the hashmap
        
        for (let i = 0; i < this.currSize; i++) {
            this.arr.push(null) // to push the null value into empty array until we get new values
        }
    }

    hash(key) { // polynomial hash function
        let ans = 0; // ans to be updated after the hash function
        let c = 101; // constant (usually prime number)
        let m = this.currSize; // modulo value
        let x = 1; 
        for (let i = 0; i < key.length; i++) {
            ans = ((ans % m) + (key.charCodeAt(i) * x) % m) % m
            x = x * c // squaring the x value since we are writing the polynomial function
        }
        return ans
    }

    insert(k, v) { // basically addAtHead function of linked list
        if (this.search(k)) {
            let bucketIndex = this.hash(k);
            let temp = this.arr[bucketIndex];
            while (temp != null && temp.key != k) {
                temp = temp.next
            }
            temp.value = v
            return
        }
        let bucketIndex = this.hash(k); // index of the array where we need to add the linked list (node or the hashed value)
        let newNode = new Node(k, v);
        newNode.next = this.arr[bucketIndex]
        this.arr[bucketIndex] = newNode

        this.elements++;

        //check load factor
        let currLoadFactor = this.elements / this.currSize
        if (currLoadFactor > this.lambda) {
            this.rehash() // rehashing after the lambda factor exceeds
        }
    }

    rehash() { //  rehashing if the lambda factor exceeds
        this.elements = 0 //since reinserting hence 0
        let oldSize = this.currSize; //storing old array size
        this.currSize = 2 * oldSize; // doubling the array size
        let oldArray = this.arr; // storing the old array
        this.arr = [] // creating the new array

        for (let i = 0; i < this.currSize; i++) { // iterating over the new array with null values
            this.arr.push(null)
        }
        for (let i = 0; i < oldArray.length; i++) { // copying from old array to the new array
            let temp = oldArray[i]
            while(temp != null) {
                this.insert(temp.key, temp.value)
                temp = temp.next
            }
        }
    }

    search(key) {
        let bucketIndex = this.hash(key)
        let temp = this.arr[bucketIndex]
        while (temp != null) {
            if (temp,key == key) return temp.value
            temp = temp.next
        }
        return undefined
    }

    display() {
        console.log(this.arr)
    }
}

let hm = new Hashmap();
hm.insert('Sanket', 1)
hm.insert('Sandeep', 2)
hm.insert('Sameer', 3)
hm.insert('Varun', 4)
hm.insert('Sameer', 7)

console.log(hm.search('Sameer'))