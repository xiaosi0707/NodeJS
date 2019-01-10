/**
 @Author：Wyunfei
 @Date：2019/1/10/9:34
 @FileName: app.js
 */

let express = require('express')

let app = express()

app.post('/', (req, res) => {
    res.send('hi world')
})

app.listen(7000, () => {
    console.log('server runing at http://localhost:7000/')
})

// 开放资源 - 下面情况你可以把 aaa 理解为路径的别名，则需要通过 - 这样(http://localhost:7000/aaa/img/同学们听我说.jpg)的方式就可以访问了
app.use('/aaa/', express.static('./public/'))
