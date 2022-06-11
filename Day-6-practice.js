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
  
  // Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
  
  function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
  }