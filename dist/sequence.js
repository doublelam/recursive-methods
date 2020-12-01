"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateMatrix = exports.regenerateMatrix = exports.fibonacciArr = exports.fibonacci = void 0;
const list_methods_1 = require("./list-methods");
/**
 * A fibonacci generator function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
const fibonacci = async (n) => {
    const fibonacciI = async (forward, afterward, num) => {
        const temSum = forward + afterward;
        if (num <= 0) {
            return afterward;
        }
        return fibonacciI(afterward, temSum, num - 1);
    };
    return fibonacciI(0, 1, n);
};
exports.fibonacci = fibonacci;
/**
 * Returns a fibonacci sequence
 *
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
const fibonacciArr = async (n) => {
    const fibonacciArrI = async (sumArr, forward, afterward, num) => {
        const temSum = forward + afterward;
        if (num <= 0) {
            return sumArr;
        }
        return fibonacciArrI(sumArr.concat(temSum), afterward, temSum, num - 1);
    };
    return fibonacciArrI([1], 0, 1, n);
};
exports.fibonacciArr = fibonacciArr;
/**
 * Regenerate a matrix, e.g. [[1,2,3],[4,5,6],[7,8,9]] --> [[1,4,7],[2,5,8],[3,6,9]]
 *
 * @param matrix an array with same length arrays
 * @returns returns a new matrix
 */
const regenerateMatrix = async (matrix) => {
    const IRegenerateMatrix = async (r, m) => {
        await null;
        if (!m[0].length) {
            return r;
        }
        const newRow = r.concat([m.map(v => v[0])]);
        return IRegenerateMatrix(newRow, m.map(v => v.slice(1)));
    };
    return IRegenerateMatrix([], matrix);
};
exports.regenerateMatrix = regenerateMatrix;
/**
 * Rotate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[3,6,9],[2,5,8],[1,4,7]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
const rotateMatrix = async (matrix) => {
    return list_methods_1.reverse(await exports.regenerateMatrix(matrix));
};
exports.rotateMatrix = rotateMatrix;
//# sourceMappingURL=sequence.js.map