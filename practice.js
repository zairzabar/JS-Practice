// build array from concatenation

var buildArray = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }
    return ans
};

buildArray([0,2,1,5,3,4])

function binarySearch(arr, x) {
	let start = 0 // starting position
  let end = arr.length - 1 // end position
  
  
  while (start <= end) {
  	let mid = (Math.floor((start + end) / 2)) // mid position
    
    if (arr[mid] == x) return mid // returning the index of the mid position if it matches with the given value
    
    if (x < arr[mid]) { // checking if the value is smaller than mid
    	end = mid - 1 // eliminating the right side
    } else { // checking if the value is greater than mid
    	start = mid + 1 // then eliminating the left side
    }
  }
  return -1 // returning -1 if nothing matches
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], ))