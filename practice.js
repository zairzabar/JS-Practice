// build array from concatenation

var buildArray = function(nums) {
    let ans = []
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }
    return ans
};

buildArray([0,2,1,5,3,4])