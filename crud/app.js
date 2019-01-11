/**
 @Author：Wyunfei
 @Date：2019/1/10/16:38
 @FileName: app.js
 */
let express = require('express')
let app = express()
let fs = require('fs')

app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public'))



app.get('/', (req, res) => {
    // readFile第二个参数是可选的，传入utf-8 就是告诉它把读取到的文件直接按照utf-8编码转成我们能认识的字符
    // 还可以通过data.toString()的方式进行转换
    fs.readFile('db.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Server error')
        console.log(JSON.parse(data))
        res.render('index.html', {
            students: JSON.parse(data).students
        })

    })

})

app.listen(7000, () => {
    console.log('running at http:/localhost:7000/')
})
