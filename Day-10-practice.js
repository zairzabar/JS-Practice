function anagram(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    return s === t
}

// console.log(anagram('race', 'care'));

function checkAnagramOptimised(s, t) {
    /**
     * Time: O(n)
     */
    // check if the length is not equal
    if(s.length != t.length) {
        return false;
    }

    // prepare frequency map of s
    let mp = {}; // inside this object we will store key value pairs - KNEE
    for(let i = 0; i < s.length; i++) { // O(n)
        if(!mp[s[i]]) {
            // if the current character is not present in the map, make entry with inital frequency 1
            mp[s[i]] = 1;
        } else {
            // the character is already present in the map
            mp[s[i]] += 1;
        }
    }
    // checking t in the map
    for(let i = 0; i < t.length; i++) { // O(n)
        if(!mp[t[i]]) {
            // this is an extra unwanted character, as it is not present in my map
            // console.log("not an angram", mp);
            return false;
        } else {
            mp[t[i]] -= 1; // now as we have found the character, we reduce the frequency
            if(mp[t[i]] == 0) delete mp[t[i]];
        }
    }
    // console.log(mp);
    // check if the number of entries in the map left is 0
    return Object.entries(mp).length == 0;
}

console.log(checkAnagramOptimised("silent", "listen"));

