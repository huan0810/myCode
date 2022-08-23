// 先加载页面再执行js代码
window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var bigImg = document.querySelector('.bigImg');

    // 事件1.鼠标经过.preview_img盒子，显示遮罩层mask，显示大盒子big；鼠标离开全部隐藏
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    // 事件2.鼠标在preview_img盒子中移动，黄色遮罩层mask跟随移动，且不会超出边界哦
    preview_img.addEventListener('mousemove', function(e) {
        // 计算出鼠标在盒子中的位置x，y
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 定义遮罩层的left，top值
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 遮罩层最大移动距离maskMax（都是正方形，长宽用一个数值表达即可）
        var maskMax = this.offsetWidth - mask.offsetWidth
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        // 事件3：鼠标在preview_img盒子中移动，大图片bigImg跟随移动，注意大图片和鼠标移动方向相反
        // bigImg移动距离=bigImg最大移动距离/mask最大移动距离*mask移动距离
        // 定义bigImg最大移动距离bigImgMax(也都是正方形，长宽用一个数值)
        var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
        // 计算bigImg移动距离
        var bigImgX = bigImgMax / maskMax * maskX;
        var bigImgY = bigImgMax / maskMax * maskY;
        bigImg.style.left = -bigImgX + 'px';
        bigImg.style.top = -bigImgY + 'px';
    })
})