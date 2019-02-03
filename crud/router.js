/**
 @Author：Wyunfei
 @Date：2019/1/11/13:49
 @FileName: router.js
 */
let fs = require('fs')

// 专门用来包装路由的
let express = require('express')
let Students = require('./student')

// 1、创建一个路由容器
let router = express.Router()

// 2、把路由都挂载到 router 路由容器中
router.get('/students', (req, res) => {
    Students.find((err, students) => {
        if (err) return res.status(500).send('Server error')
        res.render('index.html', {
            students
        })
    })
})
router.get('/students/create', (req, res) => {
    res.render('create.html')
})
router.post('/students/create', (req, res) => {
    /*
    * 1、 获取表单数据
    * 2、 处理
    *       将提交过来的数据保存到db.json文件中用以持久化
    * 3、发送响应
    *
    * 先读取出来，字符串转对象
    * 往对象中push 数据
    * 再把对象转为字符串
    * 最后把字符串再次写入文件
    *
    *
    * */
    let { body } = req
    new Students(body).save(err => {
        if (err) {
            return res.status(500).send('Server Error')
        }
        res.redirect('/students')
    })

})
router.get('/students/edit', (req, res) => {
    /*
    * 1、客户端列表处理链接问题，需要有id参数
    * 2、获取要编辑学生的 id
    * 3、渲染编辑页面
    *   a、根据id查找学生信息
    *   b、使用模板显然数据
    * */
    Students.findById(req.query.id.replace(/"/g, ""), (err, student) => {
        if (err) return res.status(500).send('Server error')
        res.render('edit.html', {
            student
        })
    })
})
router.post('/students/edit', (req, res) => {
    /**
     * 1、获取表单数据
     *      req.body
     * 2、更新
     *      Studentss.update()
     * 3、发送详情
     */
    let id = req.body.id.replace(/"/g, "")
    Students.findByIdAndUpdate(id, req.body, (err, data) => {
        if (err) return res.status(500).send('Server error')
        res.redirect('/students')
    })
})
router.get('/students/delete', (req, res) => {
    /**
     * 1、获取要删除的 id
     * 2、根据获取到的 id 删除操作
     * 3、根据操作结果发送响应
     */
    Students.delete(parseInt(req.query.id), (err ,data) => {
        if (err) return res.status(500).send('Server error')
        res.redirect('/students')
    })
})

// 3 导出router
module.exports = router
