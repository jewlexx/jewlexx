/** You live in the city of Cartesia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early to an appointment,
 * so you decided to take the opportunity to go for a short walk.
 * The city provides its citizens with a Walk Generating App on their phones,
 * everytime you press the button it sends you an array of one-letter strings representing directions to walk
 * (eg. ['n', 's', 'w', 'e']).
 * You always walk only a single block for each letter (direction)
 * and you know it takes you one minute to traverse one city block,
 * so create a function that will return true if the walk the app gives you will take you exactly ten minutes
 * (you don't want to be early or late!)
 * and will, of course, return you to your starting point. Return false otherwise.
 */
/**
 *
 * @param {array} walk
 * @returns
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

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
