// 功能需求:
// 1. 点击 tab栏,可以切换效果.
// 2. 点击 + 号, 可以添加 tab 项和内容项.
// 3. 点击 x 号, 可以删除当前的tab项和内容项.
// 4. 双击tab项文字或者内容项文字,可以修改里面的文字内容
var that; //全局变量获取构造函数中的this
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        // li的父元素
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        // section的父元素
        this.tabscon = this.main.querySelector('.tabscon');
        // 页面加载就初始化
        this.init();
    }
    init() {
        // 1.初始化，给相关元素绑定事件
        this.updateNode(); //每次初始化都重新获取li和section
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i; //给每个li添加index属性
            this.lis[i].onclick = this.toggleTab; //不加(),否则页面一加载函数就直接调用了
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }
    updateNode() {
        // 获取全部的li和section
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        // 获取所有删除按钮
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        // 获取span
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    toggleTab() {
        // 2. 切换功能
        // console.log(this.index); //这里的this指向函数调用者this.lis[i]，即当前li
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        // 把清除类操作封装成函数,清除li和section的所有类
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    addTab() {
        // 3. 添加功能
        // 添加新选项卡之前，先把其他选项卡清除liactive类
        that.clearClass();
        // (1) 创建li元素和section元素 
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">新选项卡内容' + random + '</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        // (3) 添加新的选项卡之后， 重新初始化（重新获取li和section， 并绑定事件）
        that.init();
    }
    removeTab(e) {
        // 4. 删除功能
        e.stopPropagation(); //阻止事件冒泡,点击删除时不需要触发父亲li的切换效果
        var index = this.parentNode.index;
        // console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init(); //改动了选项卡之后，再次重新获取现有的li、section、删除按钮
        // 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
        index--;
        // click()手动调用点击事件
        // that.lis[index]为真时，才执行后面的调用
        that.lis[index] && that.lis[index].click();
    }
    editTab() {
        // 5. 修改功能
        // 核心思路：双击文字的时候, 在里面生成一个文本框, 当失去焦点或者按下回车然后把文本框输入的值给原先元素即可

        // 先获取原来tab栏的文字内容
        var str = this.innerHTML; //this指向被选中的span
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select(); //让文本框处于选定状态
        // 当我们离开文本框就把文本框里面的值给span 
        input.onblur = function() { //文本框失去焦点,就把文本框内容给span
            this.parentNode.innerHTML = this.value; //this指向input
        }
        input.onkeyup = function(e) { //文本框失去焦点,就把文本框内容给span
            // console.log(e.keyCode); //13
            if (e.keyCode == 13) {
                this.blur(); //手动调用失去焦点事件
                // this.parentNode.innerHTML = this.value; //this指向input
            }
        }
    }
}
new Tab('#tab');