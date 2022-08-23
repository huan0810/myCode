$(function() {
    // 给时间补零的函数
    // function padZero(n) {
    //     if (n < 10) {
    //         return '0' + n
    //     } else {
    //         return n
    //     }
    // }

    // 定义格式化时间的过滤器
    template.defaults.imports.dateFormat = function(dtStr) {
        var dt = new Date(dtStr)

        var y = dt.getFullYear();
        var m = dt.getMonth() + 1
        m = m < 10 ? '0' + m : m; //给时间补0
        var d = dt.getDate()
        d = d < 10 ? '0' + d : d; //给时间补0
        var hh = dt.getHours()
        hh = hh < 10 ? '0' + hh : hh; //给时间补0
        var mm = dt.getMinutes()
        mm = mm < 10 ? '0' + mm : mm; //给时间补0
        var ss = dt.getSeconds()
        ss = ss < 10 ? '0' + ss : ss; //给时间补0

        return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
    }

    // 获取新闻列表的函数
    function getNewsList() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status !== 200) {
                return alert('获取新闻列表数据失败！')
            }
            for (var i = 0; i < res.data.length; i++) {
                // 把每一项的 tags 属性，从字符串改造成字符串的数组
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res)
            var htmlStr = template('tpl-news', res)
            $('#news-list').html(htmlStr)
        })
    }

    getNewsList()

})