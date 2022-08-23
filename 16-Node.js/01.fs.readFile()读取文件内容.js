// 1. 导入fs模块.
// fs 模块是 Node.js 官方提供的、用来操作文件的模块
const fs = require('fs')

// 2. 调用 fs.readFile(path[, options], callback) 方法读取文件
//    参数1：path读取文件的存放路径
//    参数2：options读取文件时候采用的编码格式，一般默认指定 utf8
//    参数3：callback回调函数，拿到读取失败和成功的结果  err  dataStr。无论成功失败都会调用回调函数
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    // 如果读取成功，则err的值为null, dataStr中存放文件内容
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    // 2.1 打印失败的结果
    console.log(err);
    console.log('-------');
    // 2.2 打印成功的结果
    console.log(dataStr);
})