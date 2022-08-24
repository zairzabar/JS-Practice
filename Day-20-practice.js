function countingSort(arr) {
    
    let maxElement = Math.max(...arr);
    let freq = new Array(maxElement + 1).fill(0)
    
    for (let i = 0; i < arr.length; i++) {
        freq[arr[i]]++;
    }

    for (let i = 1; i < freq.length; i++) {
        freq[i] = freq[i] + freq[i-1]
    }

    let output = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        let currelement = arr[i];
        let index = freq[currelement];
        output[index - 1] = currelement;
        freq[currelement]--
    }
    return output
}

console.log(countingSort([1, 2, 1, 2, 3, 4, 1, 1]));

function countsortNegative(arr) {
    let maxEl = Math.max(...arr);
    let minEl = Math.min(...arr);
    let range = maxEl - minEl + 1;
    let freq = new Array(range).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i]
        freq[currEl - minEl]++
    }

    for (let i = 1; i < freq.length; i++) {
        freq[i] += freq[i - 1]
    }

    let output = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        let currEl = arr[i];
        let index = freq[currEl - minEl];
        output[index - 1] = currEl;
        freq[currEl - minEl]--
    }
    return output
}

console.log(countsortNegative([2, 1, -3, 4, -3, -2, -1, 5, 6, 10, 6]));