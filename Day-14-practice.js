// Codewars kata

/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
Note: The function accepts an integer and returns an integer
*/
function squareDigits(num){
    // toString() to convert the number into string
    // split('') to split the converted string into array
    // map() to square the numbers
    // join to convert the array into string
    // +arr to conver the string into number
    let arr = num.toString().split('').map(e => e * e).join('')
    return +arr;
}



/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
    let hm = {}
    let s = str.toLowerCase()
    for (let i = 0; i < s.length; i++) {
        if (!hm[s[i]]) {
            hm[s[i]] = 1
        } else {
            hm[s[i]] += 1
        }
    }

    for (let j = 0; j < s.length; j++) {
        if (hm[s[j]] > 1) {
            return false
        }
        return true
    }
}

// console.log(isIsogram('Dermatoglyphics'));


//Leetcode problems
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

var lengthOfLastWord = function(s) {
	// Will count the length of the word
    let count = 0;
    
	// We start from the back is we mostly care about the last word
    for (let i = s.length - 1; i >= 0; i--) {
		// Check if its empty and count is great than 0. If count is greater, then we already saw a word
        if (s[i] === " " && count > 0) return count;
		// If it's an empty string at the start of the back. We want to just conitnue down instead of adding it as a letter
        if (s[i] === " ") continue;
		// If it isn't an empty string, it means we are on the final word. Add it to the count and move on to the next index
        count++;
    }
   
    // return the length of the last word  
    return count;
};

/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
*/

var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

/*
Runtime: 94 ms, faster than 76.70% of JavaScript online submissions for Sqrt(x).
Memory Usage: 44.1 MB, less than 21.76% of JavaScript online submissions for Sqrt(x).
*/

/*
Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function(s) {
    let str = s.replace(/\s/g, '').replace(/[^\w,]/g, '').replaceAll(',', '').replaceAll('_', '').toLowerCase();
    let rword = str.split('').reverse().join('')
    return str == rword
};

// console.log(isPalindrome("race car"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("ab_a"));

/* 
Runtime: 79 ms, faster than 89.76% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 46.9 MB, less than 35.01% of JavaScript online submissions for Valid Palindrome.
*/