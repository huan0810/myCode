function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 把步长改为整数，不要小数。
        var step = (target - obj.offsetLeft) / 10;
        // 大于0向上取整，小于0向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数写到定时器结束之后，判断有回调函数就执行.所以传入的实参可以没有回调函数
            if (callback) {
                // 调用函数用callback()
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}