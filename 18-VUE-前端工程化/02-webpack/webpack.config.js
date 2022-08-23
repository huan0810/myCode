const path = require('path'); //path是专门处理路径的模块
// html-webpack-plugin是生成预览页面的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    // 在项目根目录复制一份index.html，http://localhost:8080/可以直接访问页面了
    template: './src/index.html',
    filename: 'index.html'
});
// clean-webpack-plugin插件用于每次npm run build时都自动删除旧dist文件夹
// 左侧的{}是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // SourceMap，生成bundle.js.map文件，里面记录了源码的行号信息
    // 在开发调试阶段，加上eval-source-map，显示原代码且定位代码
    // 发布时，出于安全性考虑不要加这句代码
    // devtool: 'eval-source-map',
    // nosources-source-map显示行号但不定位原代码，是安全的
    // 实际发布时，要么用nosources-source-map，要么直接关闭SourceMap
    devtool: 'nosources-source-map',

    //编译模式 development开发阶段使用，不会压缩。  production打包上线时使用，会压缩
    mode: 'development',

    // webpack默认：打包的入口文件为 src/index.js, 打包的输出文件为 dist/main.js
    // entry修改打包的入口, __dirname 表示当前文件所处的目录
    entry: path.join(__dirname, './src/index.js'),
    // output修改打包的出口
    output: {
        path: path.join(__dirname, './dist'), //输出文件存放路径
        filename: 'js/bundle.js' //输出文件的名称
    },
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        // devServer节点配置打包项目时自动打开浏览器
        open: true, //打包完成后自动打开浏览器页面
        host: '127.0.0.1', //配置 IP 地址
        port: 8888 //配置端口
    },
    module: {
        // 打包处理css文件
        // use 数组中指定的 loader 顺序是固定的
        // 多个 loader 的调用顺序是：从后往前调用
        // postcss-loader帮助自动添加css兼容前缀
        rules: [
            // 处理css文件的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            // 处理less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的loader,一个loader可以用字符串,多个loader必须用数组
            // limit=16940 表示文件大小小于16940字节,就会被转换成base64字符串形式;
            // 否则不会被转换(大图片转换成base64体积变大会有性能损失),图片是一个链接
            // outputPath指明打包生成的图片都放在dist/image文件夹中
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940&outputPath=images' },
            // babel-loader表示打包处理 js 文件中的高级语法
            // exclude表示排除第三方包,程序员不需要考虑第三方包的兼容性问题
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // 匹配.vue文件的loader
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // 告诉webpack，程序员代码中的@表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}