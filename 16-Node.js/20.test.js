// 在每个.js 自定义模块中都有一个 module 对象， 它里面存储了和当前模块有关的信息
// 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
// 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象

// 在外界使用 require 导入一个自定义模块的时候，得到的成员，
// 就是 那个模块中，通过 module.exports 指向的那个对象
const m = require('./19.自定义模块')
    // 使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符。
    // 在加载自定义模块时，如果没有指定 ./ 或 ../ 这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载。
console.log(m) //{ nickname: '小黑', sayHi: [Function: sayHi] }