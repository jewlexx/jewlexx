function getSum(a, b) {
  if (a == b) {
    return a;
  } else {
    let large = a;
    let small = b;
    if (a < b) {
      large = b;
      small = a;
    }
    let finalSum = small;
    for (let i = small + 1; i <= large; i++) {
      finalSum += i;
    }
    return finalSum;
  }
}

// Better version
const GetSumBetter = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

export { GetSumBetter as getSum };
