/**
 *
 * @param {string} word
 */
function duplicateEncode(word) {
  let returnString = "";
  for (let i = 0; i < word.length; i++) {
    const tempWord = word.substring(0, i) + "x" + word.substring(i + 1);
    const letterSearch = tempWord.search(word[i]);
    if (letterSearch == -1) {
      returnString += "(";
    } else {
      returnString += ")";
    }
  }
  return returnString;
}

console.log(duplicateEncode("Success"));
