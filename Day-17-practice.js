var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2)
    
    if (nums[mid] == target) return mid
    
    if (nums[mid] > target) {
        hi = mid - 1
    } else {
        lo = mid + 1
    }

}
    return -1
};

// console.log(search([-1,0,3,5,9,12], 9));


var search = function(nums, target) {
    // defining the start and end points
    let lo = 0, hi = nums.length - 1
    
    // looping through the array
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2) // defining the mid point

        if (nums[mid] == target) return mid // checking if mid is the target digit

        // checking if left is sorted or not
        if (nums[lo] <= nums[mid]) {
            if (nums[lo] <= target && target <= nums[mid]) {
                hi = mid - 1
            } else {
                lo = mid + 1
            }
        } else {
            if(nums[mid] <= target && target <= nums[hi]) {
                lo = mid + 1
            } else {
                hi = mid - 1
            }
        }
    }
    return -1
};

// console.log(search([4,5,6,7,0,1,2], 9));