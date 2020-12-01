const methods = require("../dist");
const arr = new Array(100).fill(0).map(() => Math.random());
(async () => {   
    console.time('s')
    console.log(await methods.regenerateMatrix([[1000, 2000, 3000], [100, 200, 300], [10, 20, 30]]))
    console.log(await methods.rotateMatrix([[1000, 2000, 3000], [100, 200, 300], [10, 20, 30]]))
    console.timeEnd('s')
})()
