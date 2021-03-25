/**
 * Returns the A as an array without all the characters that were included in B
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

export default arrayDiff;
