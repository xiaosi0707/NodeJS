/**
 @Author：Wyunfei
 @Date：2019/1/10/16:38
 @FileName: app.js
 */
let express = require('express')
let app = express()

app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public'))



app.get('/', (req, res) => {
    res.render('index.html', {
        students: [
            '孙权',
            '曹操',
            '刘备'
        ]
    })
})

app.listen(7000, () => {
    console.log('running at http:/localhost:7000/')
})
