/**
 * A negeric function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
export const fibonacci = (n: number): number => {
  const fibonacciI = (forward: number, afterward: number, num: number): number => {
    const temSum = forward + afterward;
    if (num <= 0) {
      return afterward;
    }
    return fibonacciI(afterward, temSum, num - 1);
  };
  return fibonacciI(0, 1, n);
};

/**
 * Fibonacci function which returns fibonacci consequence
 *
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
export const fibonacciArr = (n: number): number[] => {
  const fibonacciArrI = (sumArr: number[], forward: number, afterward: number, num: number): number[] => {
    const temSum = forward + afterward;
    if (num <= 0) {
      return sumArr;
    }
    return fibonacciArrI(sumArr.concat(temSum), afterward, temSum, num - 1);
  };
  return fibonacciArrI([1], 0, 1, n);
};
