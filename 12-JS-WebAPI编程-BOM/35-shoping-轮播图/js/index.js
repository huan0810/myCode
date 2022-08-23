// 轮播图功能需求：
// 1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
// 2. 点击右侧按钮一次，图片往左播放一张，以此类推， 左侧按钮同理。
// 3. 图片播放的同时，下面小圆圈模块跟随一起变化。
// 4. 点击小圆圈，可以播放相应图片。
// 5. 鼠标不经过轮播图， 轮播图也会自动播放图片。
// 6. 鼠标经过，轮播图模块， 自动播放停止。

window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    // 每个图片的宽度即为focus盒子的宽度
    var focusWidth = focus.offsetWidth;
    // 1. 鼠标经过轮播图模块，左右按钮显示，离开隐藏左右按钮。
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        // 鼠标经过，停止自动播放
        clearInterval(timer);
        timer = null; //清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        // 鼠标离开继续自动播放，因为打开网页时已经声明过timer，所以此处不用再次声明
        timer = setInterval(function() {
            // 调用点击事件，不用手动点击，直接自动点击
            arrow_r.click();
        }, 2000);
    });

    // 2. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    // console.log(ul.children.length); //4
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 给li添加索引属性
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 3. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function() {
            // 先干掉其他人，把其他li类名设置为空
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            // 再留下我自己，类名设置current
            this.className = 'current';
            // 4. 点击小圆圈，移动图片.移动的是 ul 
            // ul的移动距离=小圆圈的索引号*图片的宽度 注意是负值
            // 点击了某个小li 就拿到当前小li的索引号
            var index = this.getAttribute('index');
            num = index; //点击某个li就要把index赋值给num，使点击下一张和点击li同步
            circle = index; //使小圆圈的播放和点击li同步
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';

    // 5.克隆第一张图片(li)放到ul 最后面.
    // 此处是因为在生成小圆圈之后克隆第一张图片的，所以生成的小圆圈不会多一个了
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    // 6.点击右侧按钮，图片滚动一张
    // 图片无缝滚动原理
    // 把ul 第一个li 复制一份， 放到ul的最后面.
    // 当图片滚动到克隆的最后一张图片时， 让ul快速的、不做动画的跳到最左侧：left为0
    // 同时num 赋值为0， 可以从新开始滚动图片了
    // num控制播放下一张
    var num = 0;
    // circle 控制小圆圈的播放
    var circle = 0;
    // flag节流阀
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; //回调函数中打开节流阀
            });
            // 7.点击右侧按钮，小圆圈跟随一起变化(排他思想)，使用全局变量circle控制小圆圈的播放
            circle++;
            // 如果circle == 4 复原circle,而且这句代码必须放在circle++下面
            if (circle == 4) {
                circle = 0;
            }
            circleChange();
        }
    })

    // 8.点击左侧按钮，图片滚动一张
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 点击右侧按钮，小圆圈跟随一起变化(排他思想)，使用全局变量circle控制小圆圈的播放
            circle--;
            // 如果circle小于0,而且这句代码必须放在circle++下面
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }
    })

    function circleChange() {
        // 先清除其他小圆圈的类名 用ol.children.length， ul.children.length长度多1
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 再留下当前小圆圈的类名
        ol.children[circle].className = 'current';
    }

    // 9.自动播放轮播图
    var timer = setInterval(function() {
        // 调用点击事件，不用手动点击，直接自动点击
        arrow_r.click();
    }, 2000);
})