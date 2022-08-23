let a = 1;
let b = 2;
let c = 3;
let d = 4;

function show() {
    console.log('我是show()');
}

// 将本模块中的私有成员暴露出去，供其它模块使用

// 默认导出
// 每个模块中，只允许使用唯一的一次 export default，否则会报错
export default {
    a,
    b,
    c,
    show
}

// 按需导出，可以使用多次
export let s1 = 'aaa';
export let s2 = 'ccc';
export function say() {
    console.log('hi');
}