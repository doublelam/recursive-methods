/**
 * A negeric function
 * 
 * @param n paramter of function, start from 0 
 * @returns returns a number of fibonacci number 
 */
export const fibonacci = (n: number): number => {
  const fibonacci_ = (forward: number, afterward: number, n: number): number => {
    let temSum = forward + afterward
    if (n <= 0) {
      return afterward
    }
    return fibonacci_(afterward, temSum, n - 1)
  }
  return fibonacci_(0, 1, n)
}


/**
 * Fibonacci function which returns fibonacci consequence
 * 
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
export const fibonacciArr = (n: number): number[] => {
  const fibonacci_ = (sumArr: number[], forward: number, afterward: number, n: number): number[] => {
    let temSum = forward + afterward
    if (n <= 0) {
      return sumArr
    }
    return fibonacci_(sumArr.concat(temSum), afterward, temSum, n - 1)
  }
  return fibonacci_([1], 0, 1, n)
}
 



