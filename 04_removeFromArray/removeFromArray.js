const removeFromArray = function (array, ...values) {
  return array.filter((val) => !values.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
