/**
 @Author：Wyunfei
 @Date：2019/1/10/16:38
 @FileName: app.js
 */
let express = require('express')
let app = express()
let router = require('./router.js')

app.engine('html', require('express-art-template'))
router(app)
// 设置开放目录
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public'))


app.listen(7000, () => {
    console.log('running at http:/localhost:7000/')
})
