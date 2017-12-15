const methods = require("../dist");
// console.log("method", methods);
// for (let v of [0, 1, 2, 3, 4, 5, 6]) {
//   console.log("test Fibonacci", v, methods.fibonacci(v));
//   console.log("test FibbonacciArr", v, methods.fibonacciArr(v));
// }

// let cc = methods.filter(v => v > 3, [1,2,3,1,2,3,4,6,3,12,4,6,1,3]);
// console.log('cc',cc) 
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
describe('Recursive Methods', () => {
  describe('Fibonacci', () => {
    let fi = methods.fibonacci;
    for (let v of [{
        input: 0,
        output: 1
      }, {
        input: 1,
        output: 1
      }, {
        input: 2,
        output: 2
      }, {
        input: 3,
        output: 3
      }, {
        input: 4,
        output: 5
      }, {
        input: 5,
        output: 8
      }]) {
      it(`when index is ${v.input}, should return ${v.output}`, () => {
        assert.equal(fi(v.input), v.output)
      })
    }
  })
  describe('Filter', () => {
    let fi = methods.filter;

    for (let v of [{
        input: [v => v > 3, []],
        output: []
      }, {
        input: [v => v > 3, [5]],
        output: [5]
      }, {
        input: [v => v > 3, [1, 2, 3, 4, 5, 6]],
        output: [4, 5, 6]
      }, {
        input: [v => v === 3, [1, 2, 3, 4, 5, 6, 3, 4, 3]],
        output: [3, 3, 3]
      }, {
        input: [v => v !== 3, [1, 2, 3, 4, 3, 5, 6]],
        output: [1, 2, 4, 5, 6]
      }, {
        input: [v => v <= 3, [1, 2, 3, 4, 5, 6]],
        output: [1, 2, 3]
      }, {
        input: [v => /^\w*\d+/.test(v), ['wer', 'ssa', 'rre32', 'ffds13', 'acxvbf7', 'css']],
        output: ['rre32', 'ffds13', 'acxvbf7']
      }]) {
      it(`when input is [${v.input[0]},[${v.input[1]}]], should return [${v.output}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(fi(...v.input)).to.deep.equal(v.output);
      })
    }
  });
  describe('Sort', () => {
    let so = methods.sort;
    for (let v of [{
        input: [(a, b) => a > b, []],
        output: []
      }, {
        input: [(a, b) => a > b, [5]],
        output: [5]
      }, {
        input: [(a, b) => a > b, [1, 4, 5, 2, 8, 2, 4, 6]],
        output: [1, 2, 2, 4, 4, 5, 6, 8]
      }, {
        input: [(a, b) => a < b, [1, 4, 5, 2, 0, 8, 2, 4, 6]],
        output: [8, 6, 5, 4, 4, 2, 2, 1, 0]
      }]) {
      it(`when input is [${v.input[0]},[${v.input[1]}]], should return [${v.output}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(so(...v.input)).to.deep.equal(v.output);
      })
    }
  });
  describe('Extreme', () => {
    let ex = methods.extreme;
    for (let v of [{
        input: [(a, b) => a > b, []],
        output: void 0
      }, {
        input: [(a, b) => a > b, [5]],
        output: 5
      }, {
        input: [(a, b) => a > b, [1, 4, 5, 2, 8, 2, 4, 6]],
        output: 8
      }, {
        input: [(a, b) => a.b > b.b, [{
          a: '22',
          b: 3
        }, {
          a: 'f',
          b: 5
        }, {
          a: 'd',
          b: 9
        }, {
          a: 'dsf',
          b: 2
        }]],
        output: {
          a: 'd',
          b: 9
        }
      }]) {
      it(`when input is [${v.input[0]},[${JSON.stringify(v.input[1])}]], should return [${JSON.stringify(v.output)}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(ex(...v.input)).to.deep.equal(v.output);
      })
    }
  });
  describe('Whileis', () => {
    let wh = methods.whileis;
    for (let v of [{
        input: [v => v > 4, []],
        output: []
      }, {
        input: [v => v < 6, [5]],
        output: [5]
      }, {
        input: [v => v > 2, [1, 4, 5, 2, 8, 2, 4, 6]],
        output: []
      }, {
        input: [v => v > 3, [5, 6, 7, 8, 9, 3, 2, 1, 2, 8, 9]],
        output: [5, 6, 7, 8, 9]
      }, {
        input: [v => v < 10, [5, 6, 7, 8, 9, 3, 2, 1, 2, 8, 9]],
        output: [5, 6, 7, 8, 9, 3, 2, 1, 2, 8, 9]
      }]) {
      it(`when input is [${v.input[0]},[${v.input[1]}]], should return [${v.output}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(wh(...v.input)).to.deep.equal(v.output);
      })
    }
  });
  describe('Drop', () => {
    let dr = methods.drop;
    for (let v of [{
        input: [v => v === 9, []],
        output: []
      }, {
        input: [v => v === 3, [5]],
        output: [5]
      }, {
        input: [v => v > 2, [1, 4, 5, 2, 8, 2, 4, 6]],
        output: [1, 5, 2, 8, 2, 4, 6]
      }, {
        input: [v => v > 3, [5, 6, 7, 8, 9, 3, 2, 1, 2, 8, 9]],
        output: [6, 7, 8, 9, 3, 2, 1, 2, 8, 9]
      }, {
        input: [v => v === 9, [5, 6, 7, 8, 9, 3, 2, 1, 2, 8, 9]],
        output: [5, 6, 7, 8, 3, 2, 1, 2, 8, 9]
      }]) {
      it(`when input is [${v.input[0]},[${v.input[1]}]], should return [${v.output}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(dr(...v.input)).to.deep.equal(v.output);
      })
    }
  });
  describe('sorter', () => {
    let sor = methods.sorter;
    for (let v of [{
        input: [(a, b) => a > b, []],
        output: []
      }, {
        input: [(a, b) => a > b, [5]],
        output: [5]
      }, {
        input: [(a, b) => a > b, [1, 4, 5, 2, 8, 2, 4, 6]],
        output: [1, 2, 2, 4, 4, 5, 6, 8]
      }, {
        input: [(a, b) => a < b, [1, 4, 5, 2, 0, 8, 2, 4, 6]],
        output: [8, 6, 5, 4, 4, 2, 2, 1, 0]
      }]) {
      it(`when input is [${v.input[0]},[${v.input[1]}]], should return [${v.output}]`, () => {
        // assert.equal(fi(v => v > 3, [1, 2, 3, 4, 5, 6]), [4, 5, 6])
        expect(sor(...v.input)).to.deep.equal(v.output);
      })
    }
  })
})