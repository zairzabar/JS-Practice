function check(arr, x) {
	for (let i = 0; i < arr.length; i++) {
  	if (arr[i] == x) {
    	return true
    }
  }
  return false
}

console.log(check([1, 2, 3, 4, 5, 6], 3))