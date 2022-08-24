function merge(arr, start, mid, end) {
    let m1 = mid - start + 1
    let m2 = end - mid
    let A = Array(m1)
    let B = Array(m2)
}

function mergeSort(arr, start, end) {
    let mid = Math.floor((start + end) / 2)
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end)
    merge(arr, start, mid, end)
}