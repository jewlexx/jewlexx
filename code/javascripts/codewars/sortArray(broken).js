// TODO Fix this shit
/**
 *
 * @returns {number[]}
 */
const arrayDiff = (a, b) => a.filter(e => !b.includes(e));

/**
 *
 * @param {number[]} array
 */
function sortArray(array) {
	const evenObj = {};
	const evenArray = array.filter((value, index) => {
		if (value % 2 == 0) {
			evenObj[index] = value;
			return true;
		} else {
			return false;
		}
	});
	const oddArray = arrayDiff(array, evenArray).sort();
	const returnArray = [];
	let arrLen = array.length;
	for (let i = 0; i < arrLen; i++) {
		if (evenObj[i] === undefined) {
			returnArray.push(oddArray[i]);
		} else {
			returnArray.push(evenObj[i]);
		}
	}
	return returnArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
