// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile(path, data[, options], callback) 方法，写入文件的内容
//    参数1：path表示文件的存放路径
//    参数2：data表示要写入的内容
//    参数3：options表示以什么格式写入文件内容，默认值是 utf8，一般省略。
//    参数4：callback回调函数，无论成功失败都会调用回调函数

// !注意 (1)写入文件的内容会完全覆盖旧内容 (2)writeFile()只能用来创建文件，不能用来创建路径

fs.writeFile('./files/33.txt', 'hello', function(err) {
    // 如果没有33.txt这个文件，会在写入时自动创建，再写入文件内容

    // 2.1 如果文件写入成功，则 err 的值等于 null
    // 2.2 如果文件写入失败，则 err 的值等于一个 错误对象
    // console.log(err);

    if (err) {
        return console.log('文件写入失败' + err.message);
    }
    console.log('文件写入成功');
})