function digit(n) {
    return n.toString().split('').reverse().map(Number)
}

console.log(digit(45699));