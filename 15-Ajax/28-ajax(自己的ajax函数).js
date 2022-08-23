// 把对象拼接成URL地址?后面的查询字符串
function resolveData(data) {
    var arr = []
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    }

    return arr.join('&')
}

// var res = resolveData({ name: 'zs', age: 20 })
// console.log(res)

function myAjax(options) {
    var xhr = new XMLHttpRequest()

    // 把外界传递过来的参数对象，转换为 查询字符串
    var qs = resolveData(options.data)

    // 判断用户发起的是GET还是POST请求
    if (options.method.toUpperCase() === 'GET') {
        // 发起GET请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === 'POST') {
        // 发起POST请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // xhr.responseText是JSON格式的字符串，要在封装的函数内把它转换成对象
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}