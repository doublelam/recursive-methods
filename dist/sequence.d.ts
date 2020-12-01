import { Matrix } from "./types/types";
/**
 * A fibonacci generator function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
export declare const fibonacci: (n: number) => Promise<number>;
/**
 * Returns a fibonacci sequence
 *
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
export declare const fibonacciArr: (n: number) => Promise<number[]>;
/**
 * Regenerate a matrix, e.g. [[1,2,3],[4,5,6],[7,8,9]] --> [[1,4,7],[2,5,8],[3,6,9]]
 *
 * @param matrix an array with same length arrays
 * @returns returns a new matrix
 */
export declare const regenerateMatrix: (matrix: Matrix<any>) => Promise<Matrix>;
/**
 * Rotate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[3,6,9],[2,5,8],[1,4,7]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
export declare const rotateMatrix: (matrix: Matrix<any>) => Promise<Matrix>;
