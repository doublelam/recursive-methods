import { List } from "./types/types";

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
  return leftVals.concat(midVal).concat(rightVals);
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
export const whileis = <T>(func: (v: T) => boolean, list: List<T>): List<T> => {
  const whileisI = (sumArr: List<T>, fun: (v: T) => boolean, li: List<T>) => {
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
    const extremeVal = extreme((a, b) => !fun(a, b), li);
    const val = sumArr.concat(extremeVal);
    if (li.length <= 1) {
      return val;
    }
    return sorterI(val,
      fun,
      drop(v => v === extremeVal, li));
  };
  return sorterI([], func, list);
};
