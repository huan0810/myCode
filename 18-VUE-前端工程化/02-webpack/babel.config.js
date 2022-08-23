module.exports = {
    // 声明babel可用插件
    // 将来webpack在调用babel-loader时,会先加载plugins里的插件
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
}