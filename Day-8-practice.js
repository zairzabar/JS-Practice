function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]]
    }
    return array
}

// console.log(selectionSort([1, 5, 6, 4, 3, 8, 7, 3, 2, 3, 5]));

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0 + 1; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([1, 5, 6, 4, 3, 8, 7, 3, 2, 3, 5]));