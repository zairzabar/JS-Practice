function check(arr, x) {
	for (let i = 0; i < arr.length; i++) {
  	if (arr[i] == x) {
    	return true
    }
  }
  return false
}

// Binary search

function binarySearch(arr, x) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2)
        if (arr[mid] == x) return mid
        if (arr[mid] > x) {
            //reduce to the left
            end = mid -1
        } else {
            //reduce to the right
            start = mid + 1
        }
    }
    return undefined
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));

// Problem
// Find first index of first element greater than the input

function upperbound(arr, x) {
    let start = 0, end = arr.length - 1;
    let ans = arr.length;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] <= x) {
            //discard left half
            start = mid + 1
        } else {
            // element at mid can be potential answer
            and = mid
            end = mid - 1
        }
    }
    return ans
}

console.log(upperbound([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))