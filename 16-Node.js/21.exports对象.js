// 在每个.js 自定义模块中都有一个 module 对象， 它里面存储了和当前模块有关的信息
// 在自定义模块中，可以使用 module.exports 对象，将模块内的成员共享出去，供外界使用。
// 外界用 require() 方法导入自定义模块时，得到的就是 module.exports 所指向的对象


// console.log(exports)
// console.log(module.exports)
// 默认exports和module.exports指向同一个对象
// console.log(exports === module.exports)//true

const username = 'zs'

module.exports.username = username
exports.age = 20
exports.sayHello = function() {
    console.log('大家好！')
}

// 最终，向外共享的结果，永远都是 module.exports 所指向的对象
// 注意：为了防止混乱，建议大家不要在同一个模块中同时使用 exports 和 module.exports