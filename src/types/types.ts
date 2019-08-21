export type List<T> = T[];

export type DataType =
  "string" |
  "object" |
  "array" |
  "number" |
  "null" |
  "function" |
  "undefined" |
  "boolean" |
  "regExp" |
  "error" |
  "date" |
  "symbol"|
  "bigint";

export type Matrix<T = any> = T[][];
