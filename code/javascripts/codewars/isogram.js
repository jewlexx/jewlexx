/**
 * Checks if the given string is an isogram (there are no repeating letters)
 * @param {string} str
 */
const isIsogram = (str) => str.split("").every((c, i) => str.indexOf(c) == i);

export { isIsogram };
