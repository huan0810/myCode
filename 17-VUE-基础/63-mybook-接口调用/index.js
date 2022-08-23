const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();

// 启动静态资源服务
app.use(express.static('./17-VUE-基础/63-mybook-接口调用/public'));

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);
// 监听端口
app.listen(3000, () => {
    console.log('running...');
});