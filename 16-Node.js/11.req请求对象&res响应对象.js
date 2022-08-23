const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // req 是请求对象，包含了与客户端相关的数据和属性
    // req.url 是客户端请求的 URL 地址
    const url = req.url;
    // req.method 是客户端请求的 method 类型
    const method = req.method;
    const str = `url是${url},method是${method}`
    console.log(str);
    res.setHeader('Content-Type', 'text/html; charset=utf-8') //解决中文乱码
        // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str);
})
server.listen(80, function() {
    console.log('server running at http://127.0.0.1');
})