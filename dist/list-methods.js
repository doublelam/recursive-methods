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
    return leftVals.concat([midVal]).concat(rightVals);
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
exports.extremeWithRest = function (func, list) {
    var extremeWithRestI = function (ext, rest, fun, arr) {
        if (!arr.length) {
            return [ext, rest];
        }
        var _a = func(arr[0], ext) ?
            [ext, rest.concat(arr[0])] :
            [arr[0], rest.concat(ext)], newExt = _a[0], newRest = _a[1];
        return extremeWithRestI(newExt, newRest, fun, arr.slice(1));
    };
    return extremeWithRestI(list[0], [], func, list.slice(1));
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
        return whileisI(sumArr.concat([li[0]]), fun, li.slice(1));
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
        var extremeVals = exports.extremeWithRest(function (a, b) { return fun(a, b); }, li);
        var val = sumArr.concat([extremeVals[0]]);
        if (li.length <= 1) {
            return val;
        }
        return sorterI(val, fun, extremeVals[1]);
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
        var currentEle = sumArr.concat([fun(li[0], index)]);
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
exports.isCongruence = function (a, b) {
    var typeFirst = exports.getType(a);
    if (typeFirst !== exports.getType(b)) {
        return false;
    }
    var TYPE_METHODS_MAP = {
        array: function (x, y) {
            if (x === y) {
                return true;
            }
            if (x.length !== y.length) {
                return false;
            }
            var ifEqual = function (pre, nex) {
                var compareFirst = exports.isCongruence(pre[0], nex[0]);
                if (pre.length <= 1) {
                    return compareFirst;
                }
                return compareFirst && TYPE_METHODS_MAP.array(pre.slice(1), nex.slice(1));
            };
            return ifEqual(x, y);
        },
        function: function (x, y) {
            if (x === y) {
                return true;
            }
            return String(x) === String(y);
        },
        object: function (x, y) {
            if (x === y) {
                return true;
            }
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
                var compareFirst = exports.isCongruence(x[keys[0]], y[keys[0]]);
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
/**
 * A function would reverse the input list
 *
 * @param list list
 * @returns return a list
 */
exports.reverse = function (list) {
    if (!list.length) {
        return list;
    }
    var reverseI = function (outputArr, li) {
        var currentEle = [li[0]].concat(outputArr);
        if (li.length <= 1) {
            return currentEle;
        }
        return reverseI(currentEle, li.slice(1));
    };
    return reverseI([], list);
};
/**
 * A function
 *
 * @param gap
 * @param func
 * @param list
 */
exports.fragment = function (gap, func, list) {
    if (!list.length) {
        return [];
    }
    if (gap <= 0) {
        var error = new Error();
        error.message = "The first parameter should be a positive number";
        throw error;
    }
    var fragmentI = function (arr, index, gapN, fun, li) {
        var frag = fun(li.slice(0, gapN), index);
        var sumArr = arr.concat([frag]);
        if (li.length <= gap) {
            return sumArr;
        }
        return fragmentI(sumArr, index + 1, gapN, fun, li.slice(gapN));
    };
    return fragmentI([], 0, gap, func, list);
};
/**
 * A function return the deduplicated value
 *
 * @param list
 */
exports.deduplicate = function (list) {
    if (!list.length) {
        return [];
    }
    var deduplicateI = function (sumArr, li) {
        var filtedArr = exports.filter(function (v) { return !exports.isCongruence(li[0], v); }, li.slice(1));
        var arr = sumArr.concat(li[0]);
        if (li.length <= 1) {
            return arr;
        }
        return deduplicateI(arr, filtedArr);
    };
    return deduplicateI([], list);
};
//# sourceMappingURL=list-methods.js.map