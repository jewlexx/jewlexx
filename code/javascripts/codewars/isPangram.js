/**
 *
 * @param {string} string
 * @returns {boolean} Whether or not the given string is a pangram
 */
const isPangram = (string) =>
  'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .filter((letter) => string.toLowerCase().includes(letter)).length === 26;

export default isPangram;
