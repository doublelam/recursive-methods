"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A negeric function
 *
 * @param n paramter of function, start from 0
 * @returns returns a number of fibonacci number
 */
exports.fibonacci = function (n) {
    var fibonacci_ = function (forward, afterward, n) {
        var temSum = forward + afterward;
        if (n <= 0) {
            return afterward;
        }
        return fibonacci_(afterward, temSum, n - 1);
    };
    return fibonacci_(0, 1, n);
};
/**
 * Fibonacci function which returns fibonacci consequence
 *
 * @param n parameter of function, start from 0
 * @returns returns a sequence of fibonacci numbers
 */
exports.fibonacciArr = function (n) {
    var fibonacci_ = function (sumArr, forward, afterward, n) {
        var temSum = forward + afterward;
        if (n <= 0) {
            return sumArr;
        }
        return fibonacci_(sumArr.concat(temSum), afterward, temSum, n - 1);
    };
    return fibonacci_([1], 0, 1, n);
};
//# sourceMappingURL=sequence.js.map


