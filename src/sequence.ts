import { reverse } from "./list-methods";
import { Matrix } from "./types/types";

/**
 * A fibonacci generator function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
export const fibonacci = async (n: number): Promise<number> => {
  const fibonacciI = async (forward: number, afterward: number, num: number): Promise<number> => {
    const temSum = forward + afterward;
    if (num <= 0) {
      return afterward;
    }
    return fibonacciI(afterward, temSum, num - 1);
  };
  return fibonacciI(0, 1, n);
};

/**
 * Returns a fibonacci sequence
 *
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
export const fibonacciArr = async (n: number): Promise<number[]> => {
  const fibonacciArrI = async (
    sumArr: number[],
    forward: number,
    afterward: number,
    num: number,
  ): Promise<number[]> => {
    const temSum = forward + afterward;
    if (num <= 0) {
      return sumArr;
    }
    return fibonacciArrI(sumArr.concat(temSum), afterward, temSum, num - 1);
  };
  return fibonacciArrI([1], 0, 1, n);
};

/**
 * Regenerate a matrix, e.g. [[1,2,3],[4,5,6],[7,8,9]] --> [[1,4,7],[2,5,8],[3,6,9]]
 *
 * @param matrix an array with same length arrays
 * @returns returns a new matrix
 */
export const regenerateMatrix = async (matrix: Matrix): Promise<Matrix> => {
  const IRegenerateMatrix = async (r: Matrix, m: Matrix) => {
    await null;
    if (!m[0].length) {
      return r;
    }
    const newRow = r.concat([m.map(v => v[0])]);
    return IRegenerateMatrix(newRow, m.map(v => v.slice(1)));
  };
  return IRegenerateMatrix([], matrix);
};

/**
 * Rotate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[3,6,9],[2,5,8],[1,4,7]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
export const rotateMatrix = async (matrix: Matrix): Promise<Matrix> => {
  return reverse(await regenerateMatrix(matrix));
};
