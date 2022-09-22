class MaxHeap {
    constructor(a) {
        this.arr = a
        for (let i = this.arr.length - 1; i >= 0; i--) {
            this.downheapify(i)
        }
    }

    upheapify(idx) {
        /* 
        Time: O(logn)
        space: O(1)
        */
        while (idx > 0) { // we can not upheapify root
            
            let parentIdx = Math.floor((idx - 1) / 2)
            if (this.arr[parentIdx] < this.arr[idx]) {
                // if parent is less than child, swap them
                let temp = this.arr[parentIdx];
                this.arr[parentIdx] = this.arr[idx]
                this.arr[idx] = temp

                // move upwards
                idx = parentIdx
            } else {
                // already a max heap;
                break;
            }
        }
    }

    downheapify(idx) {
        
        while (idx < this.arr.length) {
        
            let left = 2 * idx + 1;
            let right = 2 * idx + 2;
            let greatest = idx;
        
            if (left < this.arr.length && this.arr[left] > this.arr[greatest]) {
                greatest = left
            }
        
            if (right < this.arr.length && this.arr[right] > this.arr[greatest]) {
                greatest = right
            }
        
            if (greatest == idx) {
                break
            }

            // swap
            // let temp = this.arr[greatest];
            // this.arr[greatest] = this.arr[idx];
            // this.arr[idx] = temp
            [this.arr[greatest], this.arr[idx]] = [this.arr[idx], this.arr[greatest]]
            idx = greatest
        }
    }

    insert(x) { // to add the elements to the array
        this.arr.push(x) // basic array push
        this.upheapify(this.arr.length - 1) // arr.len - 1 is the index on which the elem x is added
    }

    removeRoot() {
        // swap
        [this.arr[0], this.arr[this.arr.length - 1]] = [this.arr[this.arr.length - 1], this.arr[0]]
        
        // delete the last elem
        this.arr.pop()

        this.downheapify(0)

    }

    display() {
        console.log(this.arr)
    }
}

let hp = new MaxHeap([3, 4, 1, 7, -1, 6, 13, 20])

hp.display()
