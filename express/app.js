/**
 @Author：Wyunfei
 @Date：2019/1/9/16:54
 @FileName: app.js
 */

// 引包
let express = require('express')

// 创建服务器
let app = express()

// 监听
app.listen(7000, () => {
    console.log('app is running at http://localhost:7000/')
})

//当服务器收到get请求/的时候，执行回调处理函数
app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/about', (req, res) => {
    res.send('你好，我是Express')
})

// 公开指定目录，你就可以直接通过url访问静态资源了
app.use('/public/', express.static('./public'))
