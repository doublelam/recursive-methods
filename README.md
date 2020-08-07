# Get starting
This package includes several recursive methods. The functions of them are as same as the js native methods such as Array.sort, Array.map. The difference of them is that these methods are recursive methods and with trail optimization, so be caution that sometimes you may encounter the exception of stack overflow, because js does not support trail optimization. 

## Install
```
npm install recursive-methods --save
```
## Usage

javascript
``` js
const recursiveMethods = require('recursive-methods');

const greatest = recursiveMethods.extreme((a, b) => a > b,[1, 2, 3, 4, 5, 6, 7, 8]);
console.log(greatest);
// 8
```

typescript
``` ts
import { map } from 'recursive-methods';
const list = ['one', 'two', 'three', 'four', 'five'];
const newList = map((v, i) => v + String(i), lists);
console.log(newList);
// ['one0', 'two1', 'three2', 'four3', 'five4']
```
## Methods
### .fibonacci(n)
Return a fibonacci number
``` js
.finonacci(0); .fibonacci(1); .fibonacci(2);
// Individually return 1; 1; 2;
```

### .fibonacciArr(n)
Return a fibonacci list
``` js
.finonacciArr(0); .fibonacciArr(1); .fibonacciArr(2);
// Individually return [1]; [1, 1]; [1, 1, 2];
```

### .filter(func, list)
Return a filtered list
``` js
.filter(v => v > 5, [1, 2, 3, 4, 5, 6, 7, 8]);
// return [6, 7, 8]
```

### .sort(func, list)
Return a sorted list
``` js
.sort((a, b) => a > b, [1,4,5,2,8,2,4,6]);
// return [1,2,2,4,4,5,6,8]
```

### .sorter(func, list)
Return a sorted list, but it has trail optimization
``` js
.sorter((a, b) => a > b,[1,4,5,2,8,2,4,6]);
// return [1,2,2,4,4,5,6,8]
```

### .extreme(func, list)
Return an extreme value
``` js
.extreme((a, b) => a > b, [1,4,5,2,8,2,4,6]);
// return 8
```

### .whileis(func, list)
Return the slice when the values matched
``` js
.whileis(v => v > 3,[5,6,7,8,9,3,2,1,2,8,9]);
// return [5,6,7,8,9]
```

### .drop(func, list)
Return the rest list which dropping one specific value
``` js
.drop(v => v === 9,[5,6,7,8,9,3,2,1,2,8,9]);
// return [5,6,7,8,3,2,1,2,8,9]
```

### .map(func, list)
Return a list that created by the returned value of the input function
``` js
.map((v, i) => `Value: ${v}, Index: ${i}`, ['value1', 'value2', 'value3']);
// return [Value: value1, Index: 0,Value: value2, Index: 1,Value: value3, Index: 2]
```

### .isCongruence(param, param)
Compare the two values, return false or true
``` js
.isCongruence({a: [{b:'one', c: [222,'dd']}]},{a: [{b:'one', c: [222,'dd']}]});
// return true
.isCongruence({a: [{b:'one', c: [223,'dd']}]},{a: [{b:'one', c: [222,'dd']}]});
// return false
.isCongruence((a, b) => a + b,(a, b) => a + b);
// return true
```

### .reverse(list)
Return a reversed list
``` js
.reverse([1, 2, 3, 4, 5, 6]);
// return [6, 5, 4, 3, 2, 1]
```

### .fragment(gap, func, list)
Return a list which created by the returned value of the parameter func.
The difference between function map and this function is that this function do not loop every element of the list, it depends on the specific parameter gap
``` js
.fragment(
  3, 
  (v, i) => (v[0] || 0) + (v[1] || 0) + (v[2] || 0),
  [1, 2, 3, 4, 5, 6, 7, 8]
);
// return [6, 15, 15]

.fragment(3, (v, i) => v, [22, 33, 44, 55, 66, 77, 88, 99, 12, 12, 124]);
// return [[22, 33, 44], [55, 66, 77], [88, 99, 12], [12, 124]]
```

### .deduplicate(list)
Return a list which is deleted duplicated values
``` js
.deduplicate([1,2,3,4,4,4,2,2,2,5,5,1,2,3,6]);
// return [1,2,3,4,5,6]
.deduplicate(['aa','bb','cc','cc','cc','dd']);
// return ['aa','bb','cc','dd']
.deduplicate([{a: 2,b: 2}, {a: 3,b: 3}, {a: 2,b: 2}, {a: 4,b: 4}]);
// return [{a: 2,b: 2}, {a: 3,b: 3}, {a: 4,b: 4}]
```
### .regenerateMatrix(matrix)
matrix is an array like 
```js
[[1,2,3],[4,5,6],[7,8,9]]
```
pick the column values as the new matrix's row values
```js
.regenerateMatrix([['1','2',3],['4','5',6],['7','8',9]])
// return [['1','4','7'], ['2','5','8'],[3,6,9]]
```
### .rotateMatrix(matrix)
rotate a matrix 90 degrees as anti-clockwise
```js
.rotateMatrix([['1','2',3],['4','5',6],['7','8',9]])
// return [[3,6,9],['2','5','8'],['1','4','7']]
```

## Author
[lam](https://github.com/doublelam)

## Project on Github
[The project address on github](https://github.com/doublelam/recursive-methods)

