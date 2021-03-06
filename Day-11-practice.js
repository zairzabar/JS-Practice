function checkFrequency(str) {
    
    let hashMap = {}; // inside this object we will store key value pairs - KNEE
    
    for(let i = 0; i < str.length; i++) { // O(n)
        if (!hashMap[str[i]]) {
            hashMap[str[i]] = 1
        } else {
            hashMap[str[i]] += 1
        }
    }

    return hashMap
}

// console.log(checkFrequency('relevel'))

// given a string of characters, find the first non-repeating character in the string
// eg: 'macbook' -> 'm'
// 'relevel' -> 'r'
// 'level' -> 'v'
// 'solutions' -> 'l'

function chkStr(str) {
    // To check the first non-repeating character, we need to check the frequency of every characters
    // The best possible way is to create a frequency map, we can do that using js objects
    // Time: O(n)
    // Space: O(1)

    let fp = {} //Empty object
    for (let i = 0; i < str.length; i++) {
        if (!fp[str[i]]) { // checking if the entry is present or not, 
            fp[str[i]] = 1 // if not then creating the entry with with the value 1
        } else {
            fp[str[i]] += 1 // if present then incrementing the frequency
        }
    }

    // iterating through the frequency map to check if the frequency is 1 or not
    for (let j = 0; j < str.length; j++) {
        if (fp[str[j]] == 1) { // 
            return str[j] // returning the first iteration where the frequency is 1
        }
    }
    return -1 // returning -1 if none of the characters have frequency of 1
}

// Test case
// console.log(chkStr('relevel'));
// console.log(chkStr('master'));
// console.log(chkStr('leel'));
// console.log(chkStr('level'));


// Output
// r
// m
// -1
// v


var containsDuplicate = function(nums) {
    
    let hashMap = {} // empty object for hashmap
    
    //iterating through arrays to check and make entries in hashmap
    for (let i = 0; i < nums.length; i++) {
       if (!hashMap[nums[i]]) {
           hashMap[nums[i]] = 1
       } else {
           hashMap[nums[i]] += 1
       }
    }
    // checking for the values that appears more than once in the array
    for (let j = 0; j < nums.length; j++) {
       if (hashMap[nums[j]] > 1) {
           return true
       }
    }
    return false
};

// test case
// console.log(containsDuplicate([1, 2, 3, 1])); 
// console.log(containsDuplicate([1, 2, 3, 4])); 
// console.log(containsDuplicate([1, 1, 1, 2, 2, 2, 3, 3, 3])); 


function recursionNum(n) {
    if (n === 1) {
        console.log(1);
        return
    }
    console.log(n);
    recursionNum(n - 1)
    console.log(n);
}

// recursionNum(5)

