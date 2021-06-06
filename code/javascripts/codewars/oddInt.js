/**
 *
 * @param {number[]} A
 * @returns
 */
function findOdd(A) {
	const counts = new Object();
	for (let i = 0; i < A.length; i++) {
		let num = A[i];
		counts[num] = counts[num] ? counts[num] + 1 : 1;
	}
	let odd = 0;
	A.forEach(val => {
		if (counts[val] % 2 === 0) return;
		odd = val;
	});
	return odd;
}

export default findOff;
