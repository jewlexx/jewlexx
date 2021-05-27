/**
 * "(" if the text has no other occurrences or ")" if it does
 * @param {string} word
 * @returns {string} The encoded string
 */
function duplicateEncode(word) {
	word = word.toLowerCase();
	let returnString = '';
	for (let i = 0; i < word.length; i++) {
		const tempWord = word.substring(0, i) + '' + word.substring(i + 1);
		if (!tempWord.includes(word[i])) {
			returnString += '(';
		} else {
			returnString += ')';
		}
	}
	return returnString;
}

// Better version
function duplicateEncodeBetter(word) {
	return word
		.toLowerCase()
		.split('')
		.map(function (a, _i, w) {
			return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
		})
		.join('');
}

export default duplicateEncode;
