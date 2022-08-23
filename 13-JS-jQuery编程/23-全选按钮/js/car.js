$(function() {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮（checkall）的状态赋值给 三个小的按钮（j-checkbox）就可以了
    // 事件可以使用change
    $(".checkall").change(function() {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        // 给选中商品添加黄色背景
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item"); //类名前不需要加点！
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".j-checkbox").change(function() {
        // $(".j-checkbox:checked").length 表示被选中的复选框个数
        // $(".j-checkbox").length 表示复选框总个数
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }

        // 给选中商品添加黄色背景
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item"); //类名前不需要加点！
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item"); //类名前不需要加点！
        }
    });

    // 2.增减商品数量模块：先获取文本框当前值，值++，在赋给文本框
    $(".increment").click(function() {
        var n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);

        // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        // toFixed(2)保留2位小数
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (price * n).toFixed(2));
        getSum();
    });
    $(".decrement").click(function() {
        var n = $(this).siblings(".itxt").val();
        if (n == 1) {
            return false; //碰到return false，后面代码不执行
        }
        n--;
        $(this).siblings(".itxt").val(n);

        // 3. 计算小计模块 根据文本框的值 乘以 当前商品的价格  就是 商品的小计
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (price * n).toFixed(2));
        getSum();
    });

    //  4. 用户修改文本框的值 计算 小计模块  
    $(".itxt").change(function() {
        var price = $(this).parents(".p-num").siblings(".p-price").html();
        price = price.substr(1);
        var n = $(this).val();
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + (price * n).toFixed(2));
        getSum();
    });
    getSum();

    // 5. 计算总计和总额模块
    function getSum() {
        var num = 0;
        var price = 0;
        // 计算总计
        $(".itxt").each(function(i, ele) {
            num += parseInt($(ele).val());
        })
        $(".amount-sum em").text(num);
        // 计算总额
        $(".p-sum").each(function(i, ele) {
            price += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text('￥' + price.toFixed(2));
    }

    // 6.点击商品后面的删除按钮
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });
    // 7.删除选中商品按钮
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });
    // 8.清空购物车按钮
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    });
})