/**
 * Gets the current time in a stupid format that you can do with so many other things like Moment.js or Day.js but noooo I had to do it myself cuz why? Cuz apparently I hate myself...
 * @returns {string} The current time
 */
async function getTime() {
	const date = new Date();

	// #region Hour
	let hour = date.getHours().toString();

	if (hour.length == 1) {
		hour = '0' + hour;
	}
	// #endregion Hour

	// #region Minute
	let minute = date.getMinutes().toString();

	if (minute.length == 1) {
		minute = '0' + minute;
	}
	// #endregion Minute

	// #region second
	let second = date.getSeconds().toString();

	if (second.length == 1) {
		second = '0' + second;
	}
	// #endregion second

	return `${hour}:${minute}:${second}`;
}

export { getTime };
