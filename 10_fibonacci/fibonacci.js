const fibonacci = function (n) {
  if (typeof n === "string") {
    n = parseInt(n);
  }

  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return "OOPS";
  }

  let first = 1,
    second = 0;
  for (let i = 2; i <= n; i++) {
    let current = first + second;
    second = first;
    first = current;
  }

  return first;
};

// Do not edit below this line
module.exports = fibonacci;
