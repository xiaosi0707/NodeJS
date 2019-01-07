/**
 @Author：Wyunfei
 @Date：2019/1/7/11:51
 @FileName: app.js
 */
let http = require('http')
let fs = require('fs')

// 简写
http.createServer((req, res) => {
    res.end('hello')
}).listen(7000, () => {
    console.log('runing at http://127.0.0.1:7000/')
})