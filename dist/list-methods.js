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
/**
 * A function that get the type of the input
 *
 * @param param
 * @return return the type of the input
 */
exports.getType = function (param) {
    if (Array.isArray(param)) {
        return "array";
    }
    if (param instanceof Date) {
        return "date";
    }
    if (param === null) {
        return null;
    }
    if (param instanceof RegExp) {
        return "regExp";
    }
    if (param instanceof Error) {
        return "error";
    }
    return typeof param;
};
/**
 * compare if two input values equals
 *
 * @param a First value
 * @param b Second value
 */
exports.congruence = function (a, b) {
    var typeFirst = exports.getType(a);
    if (typeFirst !== exports.getType(b)) {
        return false;
    }
    var TYPE_METHODS_MAP = {
        array: function (x, y) {
            if (x.length !== y.length) {
                return false;
            }
            var ifEqual = function (pre, nex) {
                var compareFirst = exports.congruence(pre[0], nex[0]);
                if (pre.length <= 1) {
                    return compareFirst;
                }
                return compareFirst && TYPE_METHODS_MAP.array(pre.slice(1), nex.slice(1));
            };
            return ifEqual(x, y);
        },
        function: function (x, y) {
            return String(x) === String(y);
        },
        object: function (x, y) {
            var xKeys = Object.keys(x);
            var yKeys = Object.keys(y);
            if (xKeys.length !== yKeys.length) {
                return false;
            }
            var ifKeysEqual = TYPE_METHODS_MAP.array(xKeys, yKeys);
            var ifEqual = function (keys) {
                if (keys.length <= 0) {
                    return true;
                }
                var compareFirst = exports.congruence(x[keys[0]], y[keys[0]]);
                if (keys.length <= 1) {
                    return compareFirst;
                }
                return compareFirst && ifEqual(keys.slice(1));
            };
            return ifKeysEqual && ifEqual(xKeys);
        },
        otherwise: function (x, y) { return a === b; },
    };
    return (TYPE_METHODS_MAP[typeFirst] || TYPE_METHODS_MAP.otherwise)(a, b);
};
//# sourceMappingURL=list-methods.js.map