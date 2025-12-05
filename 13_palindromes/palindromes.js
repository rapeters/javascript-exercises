const palindromes = function (str) {
    let arr = Array.from(str.replace(/[\W\s]/gi, '').toLowerCase());
    let revArr = arr.slice().reverse();
    return arr.join() === revArr.join();
};

// Do not edit below this line
module.exports = palindromes;
