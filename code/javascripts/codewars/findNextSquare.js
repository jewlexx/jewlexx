function findNextSquare(sq) {
	if (Math.sqrt(sq) - Math.floor(Math.sqrt(sq)) === 0) {
		let i = sq + 1;
		while (Math.sqrt(i) - Math.floor(Math.sqrt(i)) !== 0) {
			i++;
		}
		return i;
	}
	return -1;
}

export default findNextSquare;
