// 1. 导入 mysql 模块
const mysql = require('mysql');
// 2. 建立与 MySQL 数据库的连接关系
// host表示mysql安装的地址，因为是本地的数据库，所以直接使用localhost/127.0.0.1
// user表示mysql的用户名
// password表示mysql的密码
// database表示要连接的数据库名
// port表示端口，可不填，默认就是3306
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'js_test',
    port: 3306
});

// *查询数据 
// const sqlStr = 'select * from user';//可以把sql语句提前定义
db.query('select * from user', (err, results) => {
    // 报错，打印错误消息
    if (err) return console.log(err.message);
    // 没有报错，输出sql执行结果
    // ?注意：如果执行的是 select 查询语句，则执行的结果是数组
    console.log(results);
});

// *插入数据 
// 定义待执行的 SQL 语句，?是占位符
/* const sql1 = 'insert into user (username,password) values (?,?)';
const user = { username: '李天', password: '888' };
// [user.username, user.password]就是填充占位符?的
db.query(sql1, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message);
    // ?注意：如果执行的是 insert into 插入语句，则执行的结果results 是一个对象
    // ?可以通过 affectedRows 属性，来判断是否插入数据成功
    console.log('影响行数：' + results.affectedRows); //影响行数：1
}); */

// *插入数据的便捷方式:向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应,用set ?(?表示数据对象)
/* const sql2 = 'insert into user set ?';
const user2 = { username: 'anny', password: '777' };
db.query(sql2, user2, (err, results) => {
    if (err) return console.log(err.message);
    console.log('影响行数：' + results.affectedRows); //影响行数：1
}); */

// *更新数据
/* const sql3 = 'update user set username=?, password=? where id=?';
const user3 = { id: 6, username: 'litian', password: '369' };
db.query(sql3, [user3.username, user3.password, user3.id], (err, results) => {
    if (err) return console.log(err.message);
    // ?注意：执行了 update 语句之后，执行的结果results也是一个对象，
    // ?可以通过 affectedRows 判断是否更新成功
    console.log('影响行数：' + results.affectedRows);
}); */

// *更新数据的便捷方式:更新表数据时，如果数据对象的每个属性和数据表的字段一一对应,用set ?(?表示数据对象)
/* const sql4 = 'update user set ? where id=?';
const user4 = { id: 7, username: 'usst', password: 'usst123' };
db.query(sql4, [user4, user4.id], (err, results) => {
    if (err) return console.log(err.message);
    console.log('影响行数：' + results.affectedRows);
}); */

// *删除数据
/* const sql5 = 'delete from user where id=?';
// ?注意：如果sql语句有多个占位符，必须用数组指定每个占位符的值
// ?如果sql语句只有一个占位符，则可以省略数组
db.query(sql5, 4, (err, results) => {
    if (err) return console.log(err.message);
    // ?注意：执行 delete 语句之后，results结果也是一个对象，也会包含 affectedRows 属性
    console.log(results.affectedRows);
}); */

// *标记删除
// 使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见，推荐使用标记删除来模拟真正的删除。
// 标记删除，就是在表中设置status状态字段，值为1时表示已标记删除，用update替代delete
const sql6 = 'update user set status=? where id=?'
db.query(sql6, [1, 8], (err, results) => {
    if (err) return console.log(err.message)
    console.log('影响行数:' + results.affectedRows)
});