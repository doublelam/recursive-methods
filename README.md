# Get starting
This package includes several recursive methods. The functions of them are as same as the js native methods such as Array.sort, Array.map. The difference of them is that these method is recursive methods and with trail optimization, so be caution that sometimes you may encounter the exception of stack overflow, because js dose not support trail optimization. 

## Install
```
npm install recursive-methods --save
```
## Usage

``` js
const recursiveMethods = require('recursive-methods');

const greatest = recursiveMethods.extreme((a, b) => a > b,[1, 2, 3, 4, 5, 6, 7, 8]);
console.log(greatest);
// 8
```
## Methods
### .fibonacci(n)
return a fibonacci number
``` js
.finonacci(0); .fibonacci(1); .fibonacci(2);
// Individually return 1; 1; 2;
```

### .fibonacciArr(n)
return a fibonacci list]
``` js
.finonacciArr(0); .fibonacciArr(1); .fibonacciArr(2);
// Individually return [1]; [1, 1]; [1, 1, 2];
```

### .filter(func, list)
return a filtered list
``` js
.filter(v => v > 5, [1, 2, 3, 4, 5, 6, 7, 8]);
// return [6, 7, 8]
```
### .sort(func, list)
return a sorted list
``` js
.sort((a, b) => a > b, [1,4,5,2,8,2,4,6]);
// return [1,2,2,4,4,5,6,8]
```
### .sorter(func, list)
return a sorted list, but it has trail optimization
``` js
.sorter((a, b) => a > b,[1,4,5,2,8,2,4,6]);
// return [1,2,2,4,4,5,6,8]
```
### .extreme(func, list)
return an extreme value
``` js
.extreme((a, b) => a > b, [1,4,5,2,8,2,4,6]);
// return 8
```

### .whileis(func, list)
return the forest list slice when the values matched
``` js
.whileis(v => v > 3,[5,6,7,8,9,3,2,1,2,8,9]);
// return [5,6,7,8,9]
```

### .drop(func, list)
return the rest list which dropping one specific value
``` js
.drop(v => v === 9,[5,6,7,8,9,3,2,1,2,8,9]);
// return [5,6,7,8,3,2,1,2,8,9]
```

### .map(func, list)
return a list that created by the input function returned value
``` js
.map((v, i) => `Value: ${v}, Index: ${i}`, ['value1', 'value2', 'value3']);
// return [Value: value1, Index: 0,Value: value2, Index: 1,Value: value3, Index: 2]
```

## Author
[lam](https://github.com/doublelam)

## Project on Github
[The project address on github](https://github.com/doublelam/recursive-methods)

