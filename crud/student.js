/**
 @Author：Wyunfei
 @Date：2019/1/11/15:20
 @FileName: student.js

**/

let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/students')

let Schema = mongoose.Schema

let studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: String
    }
})

// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema)
