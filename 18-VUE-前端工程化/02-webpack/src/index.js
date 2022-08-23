import $ from 'jquery'; //ES6模块化语法，浏览器不识别,所以使用webpack转换代码，解决兼容性问题
import './css/index.css'
import '@/css/index.less' //@表示src源代码目录，从外往里查找

// 万物皆模块,导入图片,.jpg需要一个loader处理这种文件类型
import logo from './images/1.jpg'
console.log(logo);
$('.box').attr('src', logo)

$(function() {
    $('li:odd').css('backgroundColor', '#eee');
    $('li:even').css('backgroundColor', 'pink'); //偶数选择器
});

// webpack可以打包处理部分ES6语法,但ES6高级语法无法处理,比如装饰器
// 对于webpack无法处理的js高级语法,需要借助babel-loader进行打包处理

// 定义名为info的装饰器
function info(target) {
    // 为目标添加静态属性test
    target.info = 'test';
}
// 为Person类应用info装饰器,是实验版特性,不建议开发时使用
@info
class Person {} //警告
console.log(Person.info);

// ______________________________________________________
// 在 webpack 项目中使用 vue单文件组件，可能是版本问题，报错了

// import Vue from 'vue';
// 导入单文件组件
// import App from './components/App.vue';

// var vm = new Vue({
//     el: '#app',
//     render: h => h(App),
// });