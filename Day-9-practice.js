function digit(n) {
    return n.toString().split('').reverse().map(Number)
}

// console.log(digit(45699));

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
    let nextSquare = sqrt+1
    if (Number.isInteger(Math.sqrt(sq))) {
      return nextSquare * nextSquare
    } else {
        return -1
    }
}

console.log(findNextSquare(24));