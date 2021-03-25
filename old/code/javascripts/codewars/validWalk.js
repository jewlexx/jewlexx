/**
 * Checks to see if the values in the array will return you to the same location in 10 minutes assuming one value is 1 minute and the only values available are,
 * N, S, E and W being North, South, East and West respectively
 * This was just for codewars and is almost pointless outside of it
 * @param {array} walk
 * @returns {Boolean} If the walk is valid or not
 */
const isValidWalk = (walk) => {
  return (
    walk.length === 10 &&
    walk.filter(function (x) {
      return x === "n";
    }).length ===
      walk.filter(function (x) {
        return x === "s";
      }).length &&
    walk.filter(function (x) {
      return x === "w";
    }).length.length ===
      walk.filter(function (x) {
        return x === "e";
      }).length.length
  );
};

export { isValidWalk };
