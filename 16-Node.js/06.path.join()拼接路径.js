// fs模块，path模块都要提前导入
// path 模块是 Node.js 官方提供的、用来处理路径的模块
const path = require('path')
const fs = require('fs');
// path.join() 方法，用来将多个路径片段拼接成一个完整的路径字符串，今后都用此法拼接路径

// 注意：  只有../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr) // \a\d\e

// fs.readFile(__dirname + '/files/1.txt')//以后不要再用+拼接

// path.join(__dirname, './files/1.txt')  path.join(__dirname, '/files/1.txt') 均可
fs.readFile(path.join(__dirname, './files/1.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
})