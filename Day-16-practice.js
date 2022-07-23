function findUnique(arr) {
    let hm = {}

    for (let i = 0; i < arr.length; i++) {
        if (!hm[arr[i]]) {
            hm[arr[i]] = 1
        } else {
            hm[arr[i]] += 1
        }
    }

    let count = 0
    
    for (let j = 0; j < arr.length; j++) {
        if (hm[arr[j]] > 1) {
            return true
        }
        return false
    }
}

// console.log(findUnique([3,2,1,2,3]));

function findSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == n) {
                return [arr[i], arr[j]]
            }
        }
    }
    return -1
}

// console.log(findSum([1, 2, 3, 4, 5, 6], 11));

