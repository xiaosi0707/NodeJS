/**
 @Author：Wyunfei
 @Date：2019/1/11/13:49
 @FileName: router.js
 */
let fs = require('fs')
module.exports = (app) => {
    app.get('/students', (req, res) => {
        // readFile第二个参数是可选的，传入utf-8 就是告诉它把读取到的文件直接按照utf-8编码转成我们能认识的字符
        // 还可以通过data.toString()的方式进行转换
        fs.readFile('db.json', 'utf-8', (err, data) => {
            if (err) return res.status(500).send('Server error')
            res.render('index.html', {
                students: JSON.parse(data).students
            })
        })
    })
    app.get('/students/new', (req, res) => {

    })
    app.post('/students/new', (req, res) => {

    })
    app.get('/', (req, res) => {

    })
    app.get('/', (req, res) => {

    })
    app.get('/', (req, res) => {

    })
}
