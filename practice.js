// build array from concatenation

var buildArray = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }
    return ans
};

buildArray([0,2,1,5,3,4])

// concat array

var getConcatenation = function(nums) {
    let ans = nums;
    return ans.concat(nums)
};

//running sum of array
var runningSum = function(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        nums[i] = sum
    }
    return nums
};

// Find value after operations
var finalValueAfterOperations = function(operations) {
    let X = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes('+')) {
            X += 1
        } else {
            X -= 1
        }
    }
    return X
};

//Shuffle the array
//To-do