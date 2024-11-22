const palindromes = function (word) {
  let end = word.length - 1;
  for (let i = 0; word.length / 2; i++) {
    if (word.charAt(i) !== word.charAt(end - i)) {
      return false;
    }
  }
  return true;
};

function isSymbol(char) {
  let symbols = [",", " ", ".", "!"];

  for (const symbol in symbols) {
    if (char === symbol) {
      return true;
    }
  }

  return false;
}
// Do not edit below this line
module.exports = palindromes;
