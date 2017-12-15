"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=sequence.js.map