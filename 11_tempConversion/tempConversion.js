const convertToCelsius = function(degF) {
  let degC = (degF - 32) * (5 / 9);
  return parseFloat(degC.toFixed(1));
};

const convertToFahrenheit = function(degC) {
  let degF = (degC * (9 / 5) + 32);
  return parseFloat(degF.toFixed(1));
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10));

/*
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
*/