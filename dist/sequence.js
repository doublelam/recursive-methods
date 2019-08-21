"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_methods_1 = require("./list-methods");
/**
 * A negeric function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
exports.fibonacci = function (n) {
    var fibonacciI = function (forward, afterward, num) {
        var temSum = forward + afterward;
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
exports.fibonacciArr = function (n) {
    var fibonacciArrI = function (sumArr, forward, afterward, num) {
        var temSum = forward + afterward;
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
exports.regenerateMatrix = function (matrix) {
    var IRegenerateMatrix = function (r, m) {
        if (!m[0].length) {
            return r;
        }
        var newRow = r.concat([m.map(function (v) { return v[0]; })]);
        return IRegenerateMatrix(newRow, m.map(function (v) { return v.slice(1); }));
    };
    return IRegenerateMatrix([], matrix);
};
/**
 * rotate a matrix, [[1,2,3],[4,5,6],[7,8,9]] --> [[3,6,9],[2,5,8],[1,4,7]]
 *
 * @param matrix an array with same length arrays
 * @returns returns new matrix
 */
exports.rotateMatrix = function (matrix) {
    return list_methods_1.reverse(exports.regenerateMatrix(matrix));
};
//# sourceMappingURL=sequence.js.map