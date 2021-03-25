/**
 * Removes all vowels from the string
 * @param {string} str
 * @returns
 */
const disemvowel = (str) =>
  str
    .split('')
    .filter((value) => !['a', 'e', 'i', 'o', 'u'].includes(value.toLowerCase()))
    .join('');

export default disemvowel;
