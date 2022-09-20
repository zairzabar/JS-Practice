class MaxHeap {
    constructor() {
        this.arr = []
    }

    upheapify(idx) {
        /* 
        Time: O(logn)
        space: O(1)
        */
        while (idx > 0) { // we can not upheapify root
            let parentIdx = Math.floor((i - 1) / 2)
            
            if (this.arr[parentIdx] < this.arr[idx]) {
                // if parent is less than child, swap them
                let temp = this.arr[parentIdx];
                this.app[parentIdx] = this.arr[idx]
                this.arr[idx] = temp

                // move upwards
                idx = parentIdx
            } else {
                // already a max heap;
                break;
            }
        }
    }

    insert(x) { // to add the elements to the array
        this.arr.push(x) // basic array push
        this.upheapify(this.arr.length - 1) // arr.len - 1 is the index on which the elem x is added
    }
}