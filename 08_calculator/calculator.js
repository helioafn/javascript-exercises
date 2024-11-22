const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;
  for (const element of array) {
    sum += element;
  }

  return sum;
};

const multiply = function (array) {
  let product = 1;
  for (const element of array) {
    product *= element;
  }

  return product;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }

  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
