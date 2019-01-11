/**
 @Author：Wyunfei
 @Date：2019/1/11/15:20
 @FileName: student.js

 数据操作模块
 职责：
    只处理数据不关心业务
 */
const fs = require('fs')
const dbPath = './db.json'
/*
* 获取所有学生列表
*   callback 中的参数
*       第一个 err
*           成功 null
*           错误 错误对象
*       第二个 数据
*           成功 对象
*           错误 undefined
* return []
* */
exports.find = (callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) return callback(err)
        callback(null, JSON.parse(data).students)
    })
}
// 添加学生
exports.save = (student, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) return callback(err)
        let students = JSON.parse(data).students
        student.id = (students[students.length - 1].id) + 1 // 处理 id， 保证唯一
        students.push(student)
        let result = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, result, (err) => {
            if (err) return callback(err) // 错误就是把错误对象传递给它
            callback(null) // 成功就没错，所以是null
        })
    })
}
// 更新学生
exports.update = () => {

}
// 删除学生
exports.delete = () => {

}
