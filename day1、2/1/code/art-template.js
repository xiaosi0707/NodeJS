/**
 @Author：Wyunfei
 @Date：2019/1/6/18:55
 @FileName: art-template.js
 */
let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('./tpl.html', (err, data) => {
        if (err) return res.end('读取失败...')
        /*
        * 默认读取的data是二进制数据
        * 而模板引擎render方法需要接收的是字符串
        * 所以我们需要把data先转化为字符串，才可以给模板引擎使用
        * */
        let ret = template.render(data.toString(), {
            name: '孙坚',
            age: 33,
            province: '江东',
            hobbies: [
                '打仗',
                '打猎'
            ],
            title: '孙坚的个人信息'
        })
        // console.log(ret)
        res.end(ret)
    })
})

server.listen(7000, () => {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
})
