/**
 * If the amount in the array complicated maths etc ugh
 * This was just for codewars and is almost pointless outside of it
 * @param {Array} line
 */

// TODO Re-read the question you dumb idiot...
function tickets(line) {
  let total = 25;
  let succeed = true;
  line.forEach((value) => {
    console.log(total);
    if (total - value >= 0) {
      total += value;
    } else {
      succeed = false;
    }
  });
  return total > 0 && succeed ? "YES" : "NO";
}

console.log(tickets([25, 25, 50, 50]));
console.log(tickets([25, 100]));

// export { tickets };
