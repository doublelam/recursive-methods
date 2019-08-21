import { Matrix } from "./types/types";
import { reverse } from "./list-methods";

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

/**
 * regenerate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[1,4,7],[2,5,8],[3,6,9]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
export const regenerateMatrix = (matrix: Matrix): Matrix => {
  const IRegenerateMatrix = (r: Matrix, m: Matrix) => {
    if (!m[0].length) {
      return r;
    }
    const newRow = r.concat([m.map(v => v[0])]);
    return IRegenerateMatrix(newRow, m.map(v => v.slice(1)));
  };
  return IRegenerateMatrix([], matrix);
};

/**
 * rotate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[3,6,9],[2,5,8],[1,4,7]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
export const rotateMatrix = (matrix: Matrix): Matrix => {
  return reverse(regenerateMatrix(matrix));
};
