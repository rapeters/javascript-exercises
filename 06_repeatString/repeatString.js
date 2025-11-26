const repeatString = function(string, num) {
    let result = string;
    
    if (num < 0) {
        return "ERROR";
    } else if (num === 0) {
        return "";
    } else {
        for (let i = 1; i < num; i++) {
            result += string;
        }
        return result;
    }
};

// Do not edit below this line
module.exports = repeatString;
