/**
 @Author：Wyunfei
 @Date：2019/1/10/16:38
 @FileName: app.js
 */
let express = require('express')
let app = express()

app.engine('html', require('express-art-template'))



app.get('/', (req, res) => {
    res.render('index.html')
})

app.listen(7000, () => {
    console.log('running at http:/localhost:7000/')
})
