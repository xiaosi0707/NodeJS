/**
 @Author：Wyunfei
 @Date：2019/1/4/11:35
 @FileName: http
 */

/*
* 一步步推演 - 实现Apache服务器
* */

const wwwDir = 'G:/NodeJS/www' // apache服务器的默认资源目录www

// 1、加载http模块
let http = require('http');
let fs = require('fs')
let template = require('art-template')

// 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
let server = http.createServer();

/*
* 3、request请求事件处理函数，接收两个参数
* */
server.on('request', (req, res) => {
    fs.readFile('./template.html', (err, data) => {
        if (err) return res.end('404 Not Found')

        /*
        * 要想完成Apache目录功能需完成两件事：
        *   1、如何拿到wwwDir目录列表中文件夹和文件
        *       fs.readdir
        *   2、如何将获取到的文件夹和文件渲染到显示到template.HTML中
        *       在需要填充的位置预留特殊的标记，用以完成替换
        *       根据files生成需要的HTML内容
        * */

        // 读取目录
        fs.readdir(wwwDir, (err, files) => {
            if (err) return res.end('Can not find www dir')
            // 使用模板引擎进行解析
            let htmlStr = template.render(data.toString(), {
                files,
                title: 'www目录下的文件如下：'
            })
            res.end(htmlStr)
        })

    })
})

/*
* 4、绑定端口号，启动服务器
* */
server.listen(7000, () => {
    console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
})
