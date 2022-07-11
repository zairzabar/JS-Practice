// Convert the number to reversed array of digits
function digit(n) {
    return n.toString().split('').reverse().map(Number)
}

// console.log(digit(45699));

// Find the next perfect square
function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
    let nextSquare = sqrt+1
    if (Number.isInteger(Math.sqrt(sq))) {
      return nextSquare * nextSquare
    } else {
        return -1
    }
}

// console.log(findNextSquare(24));

// A Needle in the Haystack

function findNeedle(haystack) {
    let msg
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === 'needle') {
            msg = console.log(`found the needle at position ${i}`);
        }
    }
    return msg
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])