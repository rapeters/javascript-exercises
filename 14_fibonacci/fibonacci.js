const fibonacci = function(num) {
    let n = parseInt(num);
    
    if (n === 0) return 0;
    if (n < 0) return "OOPS"

    let arr = [1, 1];
    while (arr.length < n) {
        arr.push(arr[arr.length-1] + arr[arr.length-2]);
    }
    return arr[arr.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
