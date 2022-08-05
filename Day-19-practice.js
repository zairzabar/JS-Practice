function medianOfTwoSortedArrays(a, b) {
    let m = a.length
    let n = b.length
    
    if (m > n) {
        // a is grater than b, do binary search on b as it is smaller
        return medianOfTwoSortedArrays(b, a)
    }
    let lo = 0, hi = m

    while (lo <= hi) {
        let partitionA = lo + Math.floor((hi - lo) / 2)
        let partitionB = Math.floor((m + n + 1) / 2) - partitionA

        let maxLeftA, maxLeftB, minRightA, minRightB
        // checking the base cases
        if (partitionA == 0) {
            // No element on the left of array a
            maxLeftA = -Infinity
        } else {
            maxLeftA = a[partitionA - 1]
        }
        if (partitionB == 0) {
            // No element on the left of array b
            maxLeftB = -Infinity
        } else {
            maxLeftB = b[partitionB - 1]
        }

        if (partitionA == m) {
            // No element on the right of array a
            minRightA = Infinity
        } else {
            minRightA = a[partitionA]
        }
        if (partitionB == n) {
            // No element on the right of array b
            minRightB = Infinity
        } else {
            minRightB = b[partitionB]
        }

        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // found the partition as the condition holds true
            if ((m + n) % 2 == 0) {
                // length of the array is even
                return Math.floor((Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2)
            } else {
                // length of the array is odd 
                return Math.max(maxLeftA, maxLeftB)
            }
        }
        
        else if(maxLeftA > minRightB) {
            hi = partitionA - 1
        } else {
            lo = partitionA + 1
        }
    }
    return -1
}

console.log(medianOfTwoSortedArrays([7, 12, 14, 15, 16], [1, 2, 3, 4, 9, 11]))
