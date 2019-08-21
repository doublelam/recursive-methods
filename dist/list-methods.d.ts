import { DataType } from "./types/types";
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
export declare const extremeWithRest: <T>(func: (a: T, b: T) => boolean, list: T[]) => [T, T[]];
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
/**
 * A function that get the type of the input
 *
 * @param param
 * @return return the type of the input
 */
export declare const getType: (param: any) => DataType;
/**
 * compare if two input values equals
 *
 * @param a First value
 * @param b Second value
 */
export declare const isCongruence: (a: any, b: any) => boolean;
/**
 * A function would reverse the input list
 *
 * @param list list
 * @returns return a list
 */
export declare const reverse: <T>(list: T[]) => T[];
/**
 * A function
 *
 * @param gap
 * @param func
 * @param list
 */
export declare const fragment: <T>(gap: number, func: (val: T[], index: number) => any, list: T[]) => any[];
/**
 * A function return the deduplicated value
 *
 * @param list
 */
export declare const deduplicate: <T>(list: T[]) => T[];
