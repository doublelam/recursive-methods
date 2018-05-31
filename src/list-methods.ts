import { DataType, List } from "./types/types";
/**
 * 
 * @param func 
 * @param list 
 * @returns 
 */
export const filter = <T>(func: (v: T) => boolean, list: List<T>): List<T> => {
  const filterI = (rsl: List<T>, fun: (v: T) => boolean, li: List<T>): List<T> => {
    const eles = rsl.concat(fun(li[0]) ? [li[0]] : []);
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
export const sort = <T>(func: (a: T, b: T) => boolean, list: List<T>): List<T> => {
  if (list.length <= 1) {
    return list;
  }
  const midVal = list[0];
  const leftVals = sort(func, filter(v =>
    func(list[0], v), list.slice(1)));

  const rightVals = sort(func, filter(v =>
    !func(list[0], v), list.slice(1)));
  return leftVals.concat([midVal]).concat(rightVals);
};

/**
 * 
 * @param func function is uesed to judge the value 
 * @param list the list of input
 * @returns returns an element
 */
export const extreme = <T>(func: (a: T, b: T) => boolean, list: List<T>): T => {
  if (list.length <= 1) {
    return list[0];
  }
  const extremeI = (fun: (a: T, b: T) => boolean, li: List<T>, max: T): T => {
    const temMax = fun(max, li[0]) ? max : li[0];
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
export const extremeWithRest = <T>(func: (a: T, b: T) => boolean, list: List<T>): {
  0: T;
  1: T[];
  length: 2;
} => {
  const extremeWithRestI = (ext: T, rest: T[], fun: (a: T, b: T) => boolean, arr: List<T>): {
    0: T;
    1: T[];
    length: 2;
  } => {
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

/**
 * 
 * @param func 
 * @param list 
 */
export const whileis = <T>(func: (v: T) => boolean, list: List<T>): List<T> => {
  const whileisI = (sumArr: List<T>, fun: (v: T) => boolean, li: List<T>) => {
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
export const drop = <T>(func: (v: T) => boolean, list: List<T>): List<T> => {
  const dropI = (sumArr: List<T>, fun: (v: T) => boolean, li: List<T>) => {
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

/**
 * 
 * @param func 
 * @param list 
 */
export const sorter = <T>(func: (a: T, b: T) => boolean, list: List<T>): List<T> => {
  if (!list.length) {
    return [];
  }
  const sorterI = (sumArr: List<T>, fun: (a: T, b: T) => boolean, li: List<T>) => {
    const extremeVals = extremeWithRest((a, b) => fun(a, b), li);
    const val = sumArr.concat([extremeVals[0]]);
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
export const map = <T>(func: (val: T, index: number) => any, list: List<T>): any[] => {
  if (!list.length) {
    return [];
  }
  const mapI = (sumArr: any[], index: number, fun: (val: T, index: number) => any, li: List<T>): any[] => {
    const currentEle = sumArr.concat([fun(li[0], index)]);
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
export const getType = (param: any): DataType => {
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

/**
 * compare if two input values equals
 * 
 * @param a First value
 * @param b Second value
 */
export const isCongruence = (a: any, b: any): boolean => {
  const typeFirst = getType(a);
  if (typeFirst !== getType(b)) {
    return false;
  }
  const TYPE_METHODS_MAP = {
    array: (x: any[], y: any[]): boolean => {
      if (x === y) {
        return true;
      }
      if (x.length !== y.length) { return false; }
      const ifEqual = (pre: any[], nex: any[]): boolean => {
        const compareFirst = isCongruence(pre[0], nex[0]);
        if (pre.length <= 1) {
          return compareFirst;
        }
        return compareFirst && TYPE_METHODS_MAP.array(pre.slice(1), nex.slice(1));
      };
      return ifEqual(x, y);
    },
    function: (x: () => any, y: () => any): boolean => {
      if (x === y) {
        return true;
      }
      return String(x) === String(y);
    },
    object: (x: { [key: string]: any }, y: { [key: string]: any }) => {
      if (x === y) {
        return true;
      }
      const xKeys = Object.keys(x);
      const yKeys = Object.keys(y);
      if (xKeys.length !== yKeys.length) {
        return false;
      }
      const ifKeysEqual = TYPE_METHODS_MAP.array(xKeys, yKeys);
      const ifEqual = (keys: string[]): boolean => {
        if (keys.length <= 0) {
          return true;
        }
        const compareFirst = isCongruence(x[keys[0]], y[keys[0]]);
        if (keys.length <= 1) {
          return compareFirst;
        }
        return compareFirst && ifEqual(keys.slice(1));
      };
      return ifKeysEqual && ifEqual(xKeys);
    },
    otherwise: (x: any, y: any): boolean => x === y,
  };
  return (TYPE_METHODS_MAP[typeFirst] || TYPE_METHODS_MAP.otherwise)(a, b);
};

/**
 * A function would reverse the input list
 * 
 * @param list list
 * @returns return a list
 */
export const reverse = <T>(list: List<T>): List<T> => {
  if (!list.length) {
    return list;
  }
  const reverseI = (outputArr: List<T>, li: List<T>): List<T> => {
    const currentEle = [li[0]].concat(outputArr);
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
export const fragment = <T>(gap: number, func: (val: List<T>, index: number) => any, list: List<T>): any[] => {
  if (!list.length) {
    return [];
  }
  if (gap <= 0) {
    const error = new Error();
    error.message = "The first parameter should be a positive number";
    throw error;
  }
  const fragmentI = (arr: any[], index: number, gapN: number, fun: (v: List<T>, i: number) => any, li: List<T>) => {
    const frag = fun(li.slice(0, gapN), index);
    const sumArr = arr.concat([frag]);
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
export const deduplicate = <T>(list: List<T>): List<T> => {
  if (!list.length) {
    return [];
  }
  const deduplicateI = (sumArr: List<T>, li: List<T>): List<T> => {
    const filtedArr = filter(v => !isCongruence(li[0], v), li.slice(1));
    const arr = sumArr.concat(li[0]);
    if (li.length <= 1) {
      return arr;
    }
    return deduplicateI(arr, filtedArr);
  };
  return deduplicateI([], list);
};
