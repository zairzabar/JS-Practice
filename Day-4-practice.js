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