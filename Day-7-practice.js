let merge = function(nums1, m, nums2, n) {
    while(n){
        nums1[m++]=nums2[--n];
    }
    nums1.sort(function(val1, val2){
        return val1>val2?1:val1<val2?-1:0;
    })
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2,5,6], 3));