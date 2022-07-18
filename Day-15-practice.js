/* 
Given a sorted array where every element is present once but one element is present twice
find the repeating element
in less than O(n)
*/

// eg: [1, 3, 4, 4, 5, 6, 7, 9, 11] => 4

// my solution
function f(arr, x) {
    let start = 0, end = arr.length;
    while (start <= end) {
        
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == x && arr[mid] == arr[mid + 1] || arr[mid] == arr[mid - 1]) {
            return [true, mid]
        }

        if (arr[mid] > x) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return undefined
}

// console.log(f([1, 3, 4, 4, 5, 6, 7, 9, 11], 4));

/*
every element is repeating
find the single occuring element
*/

function findUnique(arr) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start (end - start) / 2)
        
        if (mid - 1 >= 0 && mid + 1 < arr.length && arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) {
            return arr[mid]
        }

        if (mid == 0 && mid + 1 < arr.length && arr[mid] != arr[mid + 1]) {
            return arr[mid]
        }

        if (mid == arr.length - 1 && mid - 1 >= 0 && arr[mid] != arr[mid - 1]) {
            return arr[mid]
        }
        
        if ((mid + 1 < arr.length && arr[mid] == arr[mid + 1] && mid % 2 == 0) || 
        (mid - 1 >= 0 && arr[mid] == arr[mid - 1] && (mid - 1) % 2 == 0)) {
            // 
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
    return undefined
}

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);