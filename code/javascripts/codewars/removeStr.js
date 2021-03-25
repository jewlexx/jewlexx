/**
 * Removes any strings from the array including those which are just numbers in string forms
 * @param {any[]} l
 * @returns {number[]}
 */
const filter_list = (l) => l.filter((value) => typeof value === "number");

export { filter_list as filter };
