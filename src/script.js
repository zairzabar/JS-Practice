// let obj = {
//     a: 2,
//     b: 3
// }

// let obj1 = {
//     a: 9,
//     b: 10
// }

// modify(obj, obj1)

// console.log(obj);
// console.log(obj1);

// function modify(obj, obj1) {
//     obj.a = 16,
//     obj1 = {
//         str: 'Hello'
//     }
// }

// function removeDuplicates(values) {
//     let obj = {};
//     for(let value of values) {
//         obj[value] = true
//     }
//     return Object.keys(obj)
// }

// console.log(removeDuplicates([1, 2, 2, 5, 9, 9, 1, 2]));

// function run(func){
//     console.log(func(2, 3));
// }
// let sum = function(a, b){
//     return a+b
// }

// run(sum);

// let student = {
//     name: 'zair',
//     course: 'relevel'
// }

// console.log(student);

// Object.freeze(student)

// student.name = ''



/*
    .filter() function
*/

// function evenElements(arr) {
//     let result = []
//     for (let value of arr) {
//         if (value % 2 === 0) {
//             result.push(value)
//         }
//     }
// }


// function divisibleByThree(arr) {
//     let result = []
//     for (let value of arr) {
//         if (value % 3 === 0) {
//             result.push(value)
//         }
//     }    
// }

// function filter(arr, conditionFunc){
//         let result = [];
//         for(let value of arr){
//             if(conditionFunc(value)){
//                 result.push(value)
//             }
//         return result;
//     }
// }

// let array = [1, 2, 4, 8, 3, 9, 5, 16]

// let isEven = function(value) {
//     return value % 2 === 0
// }

// let divByThree = function(value) {
//     return value % 3 === 0
// }

// console.log(array.filter(isEven));

/*
    .map() function 
*/

// let arr = [1, 2, 3, 4, 5, 6]

// let square = function (value) {
//     return value * value
// }

// console.log(arr.map(square))

// let cities = ['mumbai', 'hyderabad', 'pune', 'chennai', 'agra']

// let [city1, city2, ...restCities] = cities

// console.log(restCities);

// let superHero=[
//         {
//             realName: 'ganghadhar',
//             heroName: 'shaktimann',
//             cities: ['mumbai', 'delhi', 'pune', 'chennai'],
//             villian:{
//                 name: 'jaika1'
//             }
//         },
//         {
//             realName: 'Tony Stark',
//             heroName: 'IronMan',
//             cities: ['New York', 'Mirzapur', 'Wassepur'],
//             villian:{
//                 name: 'kaleen Bhaiya'
        
//             }
//         }
// ]

// let [, { cities : [, city2]}] = superHero

// console.log(city2);



// tiling problem using recursion
// function tilingProblem(n) {
//     if (n === 1 || n === 2 || n === 0) {
//         return n
//     }
//     return tilingProblem(n - 1) + tilingProblem(n -2)
// }

// console.log(tilingProblem(4));

// count maze problem 

// function containsDuplicate(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 2, 3, 1, 2, 3, 4]));


// Leetcode
// function maxSubArray(nums) {
//     if(nums.length == 0) return 0;
//     let result = Number.MIN_SAFE_INTEGER;
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         result = Math.max(sum, result);
//         sum = sum < 0 ? 0 : sum;
//     }
//     return result;
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


// Leetcode
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};


// Kata
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + (numbers[i] * numbers[i])
    }
    return sum
  }


// Even or Odd
  function even_or_odd(number) {
    if (number % 2 === 0) {
      console.log(`Even`)
    } else {
      console.log('Odd')
    }
  }

// even_or_odd(0)

// create a function which returns an RNA sequence from the given DNA sequence
function DNAtoRNA(dna) {
    let rna = dna.replace(/T/g, 'U')
    return rna
  }

// BMI calculator (pending)
function bmiCalc(weight, height) {
    height = height / 100
    let BMI = weight / (height * height)

    return BMI
}

/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

let greet = (name) => `Hello, ${name} how are you doing today?`

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let count = 0
  for (let i = 0; i <= num; i++) {
    count = count + i
  }
  return count
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s * 27.77778)
}

/*
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
*/

function basicOp(operation, value1, value2){
  if (operation === '+') {
    return value1 + value2
  } else if (operation === '-') {
    return value1 - value2
  } else if (operation === '*') {
    return value1 * value2
  } else if (operation === '/') {
    return value1 / value2
  } else {
    console.log('invalid input')
  }
}

/*
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count++
      } else if (input[i] < 0) {
        sum += input[i]
      } else {
        console.log('invalid input')
      }
    }
  return [count, sum]
}

// Write a function called repeatStr which repeats the given string string exactly n times.

function repeatStr (n, s) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += s
  }
  return str
}

// Alternate solution
function repeatStr (n, s) {
  return s.repeat(n);
}

// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
  let sum = 0
  if (array.length === 0){
    return 0
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
  }
  return sum/array.length
}