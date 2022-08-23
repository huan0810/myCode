// 获取评论列表
function getCommentList() {
    $.ajax({
        type: 'GET',
        url: 'http://www.liulongbin.top:3006/api/cmtlist',
        success: function(res) {
            if (res.status !== 200) return alert('获取列表失败');
            // $.each() 方法遍历元素 主要用于遍历数组，对象
            var rows = [];
            $.each(res.data, function(i, ele) {
                rows.push('<li class="list-group-item"><span class="badge" style="background-color: #F0AD4E;">评论时间：' + ele.time + '</span><span class="badge" style="background-color: #5BC0DE;">评论人：' + ele.username + '</span>' + ele.content + '</li>');
            });
            $('#cmt-list').empty().append(rows.join(''));
        }
    })
}
getCommentList();

// 发表评论
$(function() {
    $('#formAddCmt').submit(function(e) {
        e.preventDefault() //阻止表单默认提交行为
        var data = $(this).serialize();
        $.post('http://www.liulongbin.top:3006/api/addcmt', data, function(res) {
            if (res.status !== 201) return alert('发表评论失败！');
            // 发表成功后，重新刷新列表
            getCommentList();
            // 发表成功后，重置form表单，把jQuery对象转换成DOM对象才能调用reset()
            $('#formAddCmt')[0].reset();
        })
    })
})