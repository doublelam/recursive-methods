# Get starting
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

### .fibonacciArr(n)
return a fibonacci list

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
return a extreme value
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
  
  


