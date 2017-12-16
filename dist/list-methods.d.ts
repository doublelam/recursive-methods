/**
 *
 * @param func
 * @param list
 * @returns
 */
export declare const filter: <T>(func: (v: T) => boolean, list: T[]) => T[];
/**
 *
 * This method is without trail optimization
 * @param func
 * @param list
 * @returns return array or string
 */
export declare const sort: <T>(func: (a: T, b: T) => boolean, list: T[]) => T[];
/**
 *
 * @param func function is uesed to judge the value
 * @param list the list of input
 * @returns returns an element
 */
export declare const extreme: <T>(func: (a: T, b: T) => boolean, list: T[]) => T;
/**
 *
 * @param func
 * @param list
 */
export declare const whileis: <T>(func: (v: T) => boolean, list: T[]) => T[];
/**
 *
 * @param func
 * @param list
 */
export declare const drop: <T>(func: (v: T) => boolean, list: T[]) => T[];
/**
 *
 * @param func
 * @param list
 */
export declare const sorter: <T>(func: (a: T, b: T) => boolean, list: T[]) => T[];
/**
 *
 * @param func
 * @param list
 */
export declare const map: <T>(func: (val: T, index: number) => any, list: T[]) => any[];
