"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param func
 * @param list
 * @returns
 */
exports.filter = function (func, list) {
    var filterI = function (rsl, fun, li) {
        var eles = rsl.concat(fun(li[0]) ? [li[0]] : []);
        if (li.length <= 1) {
            return eles;
        }
        return filterI(eles, func, li.slice(1));
    };
    return filterI([], func, list);
};
/**
 *
 * This method is without trail optimization
 * @param func
 * @param list
 * @returns return array or string
 */
exports.sort = function (func, list) {
    if (list.length <= 1) {
        return list;
    }
    var midVal = list[0];
    var leftVals = exports.sort(func, exports.filter(function (v) {
        return func(list[0], v);
    }, list.slice(1)));
    var rightVals = exports.sort(func, exports.filter(function (v) {
        return !func(list[0], v);
    }, list.slice(1)));
    return leftVals.concat(midVal).concat(rightVals);
};
/**
 *
 * @param func function is uesed to judge the value
 * @param list the list of input
 * @returns returns an element
 */
exports.extreme = function (func, list) {
    if (list.length <= 1) {
        return list[0];
    }
    var extremeI = function (fun, li, max) {
        var temMax = fun(max, li[0]) ? max : li[0];
        if (li.length <= 1) {
            return temMax;
        }
        return extremeI(fun, li.slice(1), temMax);
    };
    return extremeI(func, list.slice(1), list[0]);
};
/**
 *
 * @param func
 * @param list
 */
exports.whileis = function (func, list) {
    var whileisI = function (sumArr, fun, li) {
        if (!fun(li[0]) || li.length <= 0) {
            return sumArr;
        }
        return whileisI(sumArr.concat(li[0]), fun, li.slice(1));
    };
    return whileisI([], func, list);
};
/**
 *
 * @param func
 * @param list
 */
exports.drop = function (func, list) {
    var dropI = function (sumArr, fun, li) {
        if (!li.length) {
            return sumArr;
        }
        var restVal = li.length <= 1 ? [] : li.slice(1);
        if (fun(li[0])) {
            return sumArr.concat(restVal);
        }
        return dropI(sumArr.concat(li[0]), fun, restVal);
    };
    return dropI([], func, list);
};
/**
 *
 * @param func
 * @param list
 */
exports.sorter = function (func, list) {
    if (!list.length) {
        return [];
    }
    var sorterI = function (sumArr, fun, li) {
        var extremeVal = exports.extreme(function (a, b) { return !fun(a, b); }, li);
        var val = sumArr.concat(extremeVal);
        if (li.length <= 1) {
            return val;
        }
        return sorterI(val, fun, exports.drop(function (v) { return v === extremeVal; }, li));
    };
    return sorterI([], func, list);
};
/**
 *
 * @param func
 * @param list
 */
exports.map = function (func, list) {
    if (!list.length) {
        return [];
    }
    var mapI = function (sumArr, index, fun, li) {
        var currentEle = sumArr.concat(fun(li[0], index));
        if (li.length <= 1) {
            return currentEle;
        }
        return mapI(currentEle, index + 1, fun, li.slice(1));
    };
    return mapI([], 0, func, list);
};
//# sourceMappingURL=list-methods.js.map