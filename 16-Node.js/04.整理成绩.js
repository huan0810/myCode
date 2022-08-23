const fs = require('fs');

fs.readFile('./files/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读文件失败' + err.message);
    }
    var score = dataStr.split(' '); //以空格将字符串分割成数组
    // 对数组中的每一项进行遍历替换
    score.forEach((item, index) => {
        score[index] = item.replace('=', ': ')
    });
    // 把数组内每一项拼接成字符串，并且回车换行
    var str = '';
    str = score.join('\r\n'); //\r\n回车换行
    // 把拼接好的内容写入文件
    fs.writeFile('./files/成绩-ok.txt', str, function(err) {
        if (err) {
            return console.log('数据写入失败' + err.message);
        }
        console.log('数据写入成功！');
    })

});