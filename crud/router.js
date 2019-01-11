/**
 @Author：Wyunfei
 @Date：2019/1/11/13:49
 @FileName: router.js
 */
let fs = require('fs')

// 专门用来包装路由的
let express = require('express')

// 1、创建一个路由容器
let router = express.Router()

// 2、把路由都挂载到 router 路由容器中
router.get('/students', (req, res) => {
    // readFile第二个参数是可选的，传入utf-8 就是告诉它把读取到的文件直接按照utf-8编码转成我们能认识的字符
    // 还可以通过data.toString()的方式进行转换
    fs.readFile('db.json', 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Server error')
        res.render('index.html', {
            students: JSON.parse(data).students
        })
    })
})
router.get('/students/new', (req, res) => {

})
router.post('/students/new', (req, res) => {

})
router.get('/', (req, res) => {

})
router.get('/', (req, res) => {

})
router.get('/', (req, res) => {

})

// 3 导出router
module.exports = router
