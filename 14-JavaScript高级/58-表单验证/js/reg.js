window.onload = function() {
    var regtel = /^1[3|4|5|7|8|9]\d{9}$/; //手机号码的正则表达式
    var regmsg = /^\d{6}$/; //短信验证码正则表达式
    var regpwd = /^[a-zA-Z0-9-_]{6,16}$/; //密码正则表达式

    var tel = document.querySelector('#tel');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');

    regexp(tel, regtel);
    regexp(msg, regmsg);
    regexp(pwd, regpwd);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入';
            }
        }
    };

    surepwd.onblur = function() {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = ' <i class="error_icon"></i> 密码不一致，请从新输入';
        }
    }

}