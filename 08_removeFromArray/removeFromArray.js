const removeFromArray = function(arr, ...obj) {
        
    for (let i = 0; i < obj.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            if (arr.includes(obj[i])) {
                arr.splice(arr.indexOf(obj[i]),1);
                j--;
            }
        }
    }
    return arr;
};

// console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 4], 4, 5, 2, 9));

// Do not edit below this line
module.exports = removeFromArray;

