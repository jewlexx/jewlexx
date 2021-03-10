const arrayDiff = (a, b) => a.filter((e) => !b.includes(e));

/**
 *
 * @param {number[]} array
 */
function sortArray(array) {
  const evenObj = {};
  const evenArray = array.filter((value, index) => {
    if (value % 2 === 0) {
      evenObj.index = value;
      return true;
    } else {
      return false;
    }
  });
  const oddArray = arrayDiff(array, evenArray);
  console.log(
    "Even array: " +
      evenArray +
      "\nOdd array: " +
      oddArray +
      "\nAnd finally all of the even numbers with their index: " +
      evenObj.toString()
  );
}

sortArray([5, 3, 2, 8, 1, 4]);
