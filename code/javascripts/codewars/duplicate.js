/**
 *
 * @param {string} word
 */
function duplicateEncode(word) {
  word = word.toLowerCase();
  let returnString = "";
  for (let i = 0; i < word.length; i++) {
    const tempWord = word.substring(0, i) + "" + word.substring(i + 1);
    if (!tempWord.includes(word[i])) {
      returnString += "(";
    } else {
      returnString += ")";
    }
  }
  return returnString;
}

// Better version
function duplicateEncodeBetter(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

module.exports.duplicateEncode = duplicateEncodeBetter;
