/**
 * Look... I hate everything about this script... It kills me that it even exists... But if you really wanna crash someone's browser, copy and paste it into the chromium console
 *
 * OOOOOO and do it when they leave and they come back super confused!!!
 *
 * **BUT DON'T DO THIS!!!**
 *
 * *But can be pretty funny*
 * @param {string} string
 * @param {Number} timeout
 */
const virus = (string = 'There is a virus', timeout = 1000) =>
  setInterval(
    (document.getElementsByTagName('*')[0].textContent += string),
    timeout
  );

export { virus };
