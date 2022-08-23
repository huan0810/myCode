// console.log(111);
// 运行命令 npx babel-node .\18-VUE-前端工程化\01-Node.js中体验ES6模块化\index.js
// 输出111表示,babel配置成功,可以在node.js中使用高级ES6特性了,比如ES6模块化

// 导入m1.js文件，m1只包含默认导出的成员，不包括按需导出成员
// { s1, s2 as ss2, say }是对应的按需导出的成员
import m1, { s1, s2 as ss2, say } from './01-m1-默认导出&按需导出.js';
// console.log(m1); //{ a: 1, b: 2, c: 3, show: [Function: show] }
// console.log(s1);
// console.log(ss2);
// console.log(say);

// 直接导入并执行模块代码
// 省略from关键字，不需要接收向外暴露的成员，直接执行模块里的代码了
import './02-m2-直接导出.js'; //输出0 1 2