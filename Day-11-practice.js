function checkFrequency(str) {
    
    let hashMap = {}; // inside this object we will store key value pairs - KNEE
    
    for(let i = 0; i < str.length; i++) { // O(n)
        if (!hashMap[str[i]]) {
            hashMap[str[i]] = 1
        } else {
            hashMap[str[i]] += 1
        }
    }

    return hashMap
}

console.log(checkFrequency('relevel'));