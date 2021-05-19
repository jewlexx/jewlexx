// Failed this one too and then cheated to get the proper add function that works
/**
 * Plz don't ever use this... just do x + y
 * @param {number} x
 * @param {number} y
 */
function add(x, y) {
  while (y != 0) {
    let carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  return x;
}

export default add;
