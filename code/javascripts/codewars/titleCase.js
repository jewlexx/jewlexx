/**
 *
 * @param {string} title
 * @param {string} minorWords
 */
function titleCase(title, minorWords) {
	if (minorWords === undefined) minorWords = '';
	if (title === '') return '';
	const titleArray = title.split(' ');
	const returnArray = [];
	minorWords = minorWords.split(' ').map(val => val.toLowerCase());
	for (let i = 0; i < titleArray.length; i++) {
		if (minorWords.includes(titleArray[i].toLowerCase()) && i !== 0)
			returnArray.push(titleArray[i].toLowerCase());
		else
			returnArray.push(
				titleArray[i].substr(0, 1).toUpperCase() +
					titleArray[i].substr(1).toLocaleLowerCase()
			);
	}

	return returnArray.join(' ');
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
