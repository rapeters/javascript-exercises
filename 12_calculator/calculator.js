const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {
    product *= element;
  })
  return product;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    let product = n;
    for (let i = n; i > 1; i--) {
      product *= (i - 1);
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};