const fs = require('fs')

// (1)用相对路径
// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径（./是当前目录 ../是父级目录 /是根目录）
// 如果要解决这个问题，可以直接提供一个完整的文件存放路径就行
// 代码在运行的时候，会以执行 node 命令时所处的目录，动态拼接出被操作文件的完整路径。
/* fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
  if (err) {
    return console.log('读取文件失败！' + err.message)
  }
  console.log('读取文件成功！' + dataStr)
}) */


// (2)用绝对路径,绝对路径的\需要用\\转义!!!
// 移植性非常差、不利于维护 
/* fs.readFile('E:\\前端\\MyCode\\16-Node.js\\files\\1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
}) */



// (3)__dirname 表示当前文件(05.演示路径的问题.js)所处的目录
console.log(__dirname) //E:\前端\MyCode\16-Node.js

fs.readFile(__dirname + '/files/1.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
})