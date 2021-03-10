/**
 *
 * @param {any[]} l
 * @returns {number[]}
 */
const filter_list = (l) => l.filter((value) => typeof value === "number");

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
