const methods = require('../dist');
console.log('methods', methods)
for (let v of [0, 1, 2, 3, 4, 5, 6]) {
  console.log('test Fibonacci ', v, methods.fibonacci(v))
  console.log('test FibbonacciArr', v, methods.fibonacciArr(v))

}