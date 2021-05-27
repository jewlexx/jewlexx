/**
 * Removes any strings from the array including those which are just numbers in string forms
 * @param {any[]} l
 * @returns {number[]}
 */
const filterList = l => l.filter(value => typeof value === 'number');

export default filterList;
