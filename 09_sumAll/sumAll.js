const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    } else {
        
        let arr = [a, b];
        arr.sort(function(a, b){return a - b});
        
        let low = arr[0];
        let high = arr[1];
        
        let total = 0;
        
        for (let i = low; i <= high; i++) {
            total += i;
        }
        
        return total;
    }
};

// console.log(sumAll(-10, -9));

// Do not edit below this line
module.exports = sumAll;
