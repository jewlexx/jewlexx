/**
 *
 * @param {any[]} names
 * @returns
 */
function organizeNames(names) {
	if (!(names.length <= 1)) {
		names.forEach((_val, i) => {
			names.splice(i, 1, names[i]['name']);
		});
		return (
			names.slice(0, names.length - 1).join(', ') +
			' & ' +
			names.slice(names.length - 1)
		);
	} else if (names.length === 1) {
		return names[0]['name'];
	} else {
		return '';
	}
}

export default organizeNames;
