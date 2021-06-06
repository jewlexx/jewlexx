// Yeah nah this didn't work
/**
 * If the amount in the array complicated maths etc ugh
 * This was just for codewars and is almost pointless outside of it
 *
 * **This didn't work out and I could not find a solution**
 * @param {Number[]} line
 */
function tickets(line) {
	let numberOf25 = 0;
	let numberOf50 = 0;
	let numberOf100 = 0;
	let succeed = true;
	line.forEach(value => {
		// console.log("Just got given a " + value);
		switch (value) {
			case 25:
				numberOf25++;
				break;
			case 50:
				if (numberOf25 >= 1) {
					numberOf25--;
					numberOf50++;
				} else {
					succeed = false;
				}
				break;
			case 100:
				if (numberOf25 >= 3) {
					numberOf100++;
					numberOf25 - 3;
				} else if (numberOf50 >= 1 && numberOf25 >= 1) {
					numberOf100++;
					numberOf50 - 2;
					numberOf25 - 1;
				} else {
					succeed = false;
				}
				break;
		}
		// console.log(numberOf25 + " " + numberOf50 + " " + numberOf100);
	});
	return succeed ? 'YES' : 'NO';
}

export { tickets };
