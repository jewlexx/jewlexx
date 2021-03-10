/**
 *
 * @param {string} str
 */
function isIsogram(str) {
  str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const tempString = str.replace(str[i], "");
    if (tempString.includes(str[i])) {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("isogram"));
