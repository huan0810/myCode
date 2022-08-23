// 在一个自定义模块中，默认情况下， module.exports = {}

const age = 20

// 向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs'
// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function () {
  console.log('Hello!')
}
module.exports.age = age //把私有成员age通过module.exports暴露出去

// 只挂载以上三个属性的话，最终暴露出去的是{ username: 'zs', sayHello: [Function (anonymous)], age: 20 }

// 让 module.exports 指向一个全新的对象,最终暴露的只有这个全新的对象
// module.exports = {
//     nickname: '小黑',
//     sayHi() {
//         console.log('Hi!')
//     }
// }
