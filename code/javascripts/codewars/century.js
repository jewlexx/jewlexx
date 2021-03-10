// Figure out centry based on year
// EG. 0-100 = 1 & 101 = 2
const century = (year) =>
  year % 100 === 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;

export { century };
