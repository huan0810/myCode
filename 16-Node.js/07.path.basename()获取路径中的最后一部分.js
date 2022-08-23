const path = require('path');
// path.basename() ，获取路径中的最后一部分.
// 第二个参数'.html'，表示去掉文件名的后缀名

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)
console.log(fullName) //index.html

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt) //index