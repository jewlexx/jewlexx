/**
 * Masks all but the last 4 characters of a string with hashtags
 * @param {string} cc
 * @returns {string} The masked string
 */
function maskify(cc) {
  const ccBack = cc;
  if (cc.length <= 4) {
    return cc;
  }
  function mask() {
    let masked = '#';
    for (let i = 1; i < cc.length; i++) {
      if (i > cc.length - 5) {
        masked += cc[i];
      } else {
        masked += '#';
      }
    }
    return masked;
  }
  return mask();
}

// Better version
function maskifyBetter(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

export default maskify;
