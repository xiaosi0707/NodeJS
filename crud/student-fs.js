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


/**
 * 根据 id 获取学生信息对象
 * @param id { Number } 学生 id
 * @param callback { Function } 回调函数
 */
exports.findById = (id, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) return callback(err) // 如果有错, callback
        let students = JSON.parse(data).students
        let stu = students.find(item => {
            return parseInt(item.id) === id
        })
        callback(null, stu) // 如果没错，err 就是 null，第二个就是正确结果 ；调用的时候可以根据第一个参数来来知道是不是有错
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
exports.update = (student, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) {
            return callback(err)
        }
        let students = JSON.parse(data).students

        // 保存的时候把 id 转为 Number
        student.id = parseInt(student.id)

        // 你要修改谁，就需要把谁找出来 - 根据 id
        let stu = students.find((item) => {
            return item.id === student.id
        })

        for(let key in student) {
            stu[key] = student[key]
        }

        let result = JSON.stringify({
            students
        })
        fs.writeFile(dbPath, result, (err) => {
            if (err) return callback(err) // 错误就是把错误对象传递给它
            callback(null) // 成功就没错，所以是null
        })
    })
}

// 删除学生
exports.delete = (id, callback) => {
    fs.readFile(dbPath, (err, data) => {
        if (err) return  callback(err)
        let arrStu = JSON.parse(data).students
        let arrResult = arrStu.filter(item => {
            return item.id !== id
        })
        let strResult = JSON.stringify({
            students: arrResult
        })
        fs.writeFile(dbPath, strResult, (err) => {
            if (err) return callback(err)
            callback(null)
        })
    })
}
