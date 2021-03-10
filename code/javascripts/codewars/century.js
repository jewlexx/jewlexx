/**
 * Figure out century based on year
 * eg. 123 would return 2 as it is in the second century
 * @param {Number} year
 * @returns {Number} What century that year is in
 */
const century = (year) =>
  year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;

export { century };
