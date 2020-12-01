"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduplicate = exports.fragment = exports.reverse = exports.isCongruence = exports.getType = exports.map = exports.sorter = exports.drop = exports.whileis = exports.extremeWithRest = exports.extreme = exports.sort = exports.filter = void 0;
/**
 *
 * @param func
 * @param list
 * @returns
 */
const filter = (func, list) => {
    const filterI = async (rsl, fun, li) => {
        await null;
        const eles = rsl.concat(fun(li[0]) ? [li[0]] : []);
        if (li.length <= 1) {
            return eles;
        }
        return filterI(eles, func, li.slice(1));
    };
    return filterI([], func, list);
};
exports.filter = filter;
/**
 *
 * This method is without trail optimization
 * @param func
 * @param list
 * @returns return array or string
 */
const sort = async (func, list) => {
    if (list.length <= 1) {
        return list;
    }
    const midVal = list[0];
    const leftVals = await exports.sort(func, await exports.filter(v => func(list[0], v), list.slice(1)));
    const rightVals = await exports.sort(func, await exports.filter(v => !func(list[0], v), list.slice(1)));
    return leftVals.concat([midVal]).concat(rightVals);
};
exports.sort = sort;
/**
 *
 * @param func function is uesed to judge the value
 * @param list the list of input
 * @returns returns an element
 */
const extreme = async (func, list) => {
    if (list.length <= 1) {
        return list[0];
    }
    const extremeI = async (fun, li, max) => {
        await null;
        const temMax = fun(max, li[0]) ? max : li[0];
        if (li.length <= 1) {
            return temMax;
        }
        return extremeI(fun, li.slice(1), temMax);
    };
    return extremeI(func, list.slice(1), list[0]);
};
exports.extreme = extreme;
/**
 *
 * @param func
 * @param list
 */
const extremeWithRest = async (func, list) => {
    const extremeWithRestI = async (ext, rest, fun, arr) => {
        await null;
        if (!arr.length) {
            return [ext, rest];
        }
        const [newExt, newRest] = func(arr[0], ext) ?
            [ext, rest.concat(arr[0])] :
            [arr[0], rest.concat(ext)];
        return extremeWithRestI(newExt, newRest, fun, arr.slice(1));
    };
    return extremeWithRestI(list[0], [], func, list.slice(1));
};
exports.extremeWithRest = extremeWithRest;
/**
 *
 * @param func
 * @param list
 */
const whileis = async (func, list) => {
    const whileisI = async (sumArr, fun, li) => {
        await null;
        if (!fun(li[0]) || li.length <= 0) {
            return sumArr;
        }
        return whileisI(sumArr.concat([li[0]]), fun, li.slice(1));
    };
    return whileisI([], func, list);
};
exports.whileis = whileis;
/**
 *
 * @param func
 * @param list
 */
const drop = async (func, list) => {
    const dropI = async (sumArr, fun, li) => {
        await null;
        if (!li.length) {
            return sumArr;
        }
        const restVal = li.length <= 1 ? [] : li.slice(1);
        if (fun(li[0])) {
            return sumArr.concat(restVal);
        }
        return dropI(sumArr.concat(li[0]), fun, restVal);
    };
    return dropI([], func, list);
};
exports.drop = drop;
/**
 *
 * @param func
 * @param list
 */
const sorter = async (func, list) => {
    if (!list.length) {
        return [];
    }
    const sorterI = async (sumArr, fun, li) => {
        await null;
        const extremeVals = await exports.extremeWithRest((a, b) => fun(a, b), li);
        const val = sumArr.concat([extremeVals[0]]);
        if (li.length <= 1) {
            return val;
        }
        return sorterI(val, fun, extremeVals[1]);
    };
    return sorterI([], func, list);
};
exports.sorter = sorter;
/**
 *
 * @param func
 * @param list
 */
const map = async (func, list) => {
    if (!list.length) {
        return [];
    }
    const mapI = async (sumArr, index, fun, li) => {
        await null;
        const currentEle = sumArr.concat([fun(li[0], index)]);
        if (li.length <= 1) {
            return currentEle;
        }
        return mapI(currentEle, index + 1, fun, li.slice(1));
    };
    return mapI([], 0, func, list);
};
exports.map = map;
/**
 * A function that get the type of the input
 *
 * @param param
 * @return return the type of the input
 */
const getType = (param) => {
    if (Array.isArray(param)) {
        return "array";
    }
    if (param instanceof Date) {
        return "date";
    }
    if (param === null) {
        return "null";
    }
    if (param instanceof RegExp) {
        return "regExp";
    }
    if (param instanceof Error) {
        return "error";
    }
    return typeof param;
};
exports.getType = getType;
/**
 * compare if two input values equals
 *
 * @param a First value
 * @param b Second value
 */
const isCongruence = (a, b) => {
    const typeFirst = exports.getType(a);
    if (typeFirst !== exports.getType(b)) {
        return false;
    }
    const TYPE_METHODS_MAP = {
        array: (x, y) => {
            if (x === y) {
                return true;
            }
            if (x.length !== y.length) {
                return false;
            }
            const ifEqual = (pre, nex) => {
                const compareFirst = exports.isCongruence(pre[0], nex[0]);
                if (pre.length <= 1) {
                    return compareFirst;
                }
                return compareFirst && TYPE_METHODS_MAP.array(pre.slice(1), nex.slice(1));
            };
            return ifEqual(x, y);
        },
        function: (x, y) => {
            if (x === y) {
                return true;
            }
            return String(x) === String(y);
        },
        object: (x, y) => {
            if (x === y) {
                return true;
            }
            const xKeys = Object.keys(x);
            const yKeys = Object.keys(y);
            if (xKeys.length !== yKeys.length) {
                return false;
            }
            const ifKeysEqual = TYPE_METHODS_MAP.array(xKeys, yKeys);
            const ifEqual = (keys) => {
                if (keys.length <= 0) {
                    return true;
                }
                const compareFirst = exports.isCongruence(x[keys[0]], y[keys[0]]);
                if (keys.length <= 1) {
                    return compareFirst;
                }
                return compareFirst && ifEqual(keys.slice(1));
            };
            return ifKeysEqual && ifEqual(xKeys);
        },
        otherwise: (x, y) => x === y,
    };
    return (TYPE_METHODS_MAP[typeFirst] || TYPE_METHODS_MAP.otherwise)(a, b);
};
exports.isCongruence = isCongruence;
/**
 * A function would reverse the input list
 *
 * @param list list
 * @returns return a list
 */
const reverse = async (list) => {
    if (!list.length) {
        return list;
    }
    const reverseI = async (outputArr, li) => {
        await null;
        const currentEle = [li[0]].concat(outputArr);
        if (li.length <= 1) {
            return currentEle;
        }
        return reverseI(currentEle, li.slice(1));
    };
    return reverseI([], list);
};
exports.reverse = reverse;
/**
 * A function
 *
 * @param gap
 * @param func
 * @param list
 */
const fragment = async (gap, func, list) => {
    if (!list.length) {
        return [];
    }
    if (gap <= 0) {
        const error = new Error();
        error.message = "The first parameter should be a positive number";
        throw error;
    }
    const fragmentI = async (arr, index, gapN, fun, li) => {
        const frag = fun(li.slice(0, gapN), index);
        const sumArr = arr.concat([frag]);
        if (li.length <= gap) {
            return sumArr;
        }
        return fragmentI(sumArr, index + 1, gapN, fun, li.slice(gapN));
    };
    return fragmentI([], 0, gap, func, list);
};
exports.fragment = fragment;
/**
 * A function return the deduplicated value
 *
 * @param list
 */
const deduplicate = async (list) => {
    if (!list.length) {
        return [];
    }
    const deduplicateI = async (sumArr, li) => {
        await null;
        const filtedArr = await exports.filter(v => !exports.isCongruence(li[0], v), li.slice(1));
        const arr = sumArr.concat(li[0]);
        if (li.length <= 1) {
            return arr;
        }
        return deduplicateI(arr, filtedArr);
    };
    return deduplicateI([], list);
};
exports.deduplicate = deduplicate;
//# sourceMappingURL=list-methods.js.map