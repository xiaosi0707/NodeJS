/**
 @Author：Wyunfei
 @Date：2019/1/7/11:51
 @FileName: app.js
 */

/*
* 把所有模块的加载我通常放在最上面
* 为了让目录结构保持一致和清晰，把有的HTML放到了views目录下；把静态资源放到了public目录下；
* 那些资源能够被用户访问，哪些不能，我们现在可以通过代码进行控制，非常灵活
* */
let http = require('http')
let fs = require('fs')

// 简写
http.createServer((req, res) => {
    let url = req.url
    if (url === '/') { // 首页
        fs.readFile('./views/index.html', (err, data) => {
            if (err) return res.end('404 Not Found')
            res.end(data)
        })
    } else if (url.indexOf('/public/') === 0) {
        /*
        * 统一处理静态资源：
        *   如果请求路径是以/public/开头的，则我认为你要获取public目录中的某个资源
        *   所以我们可以把请求路径当作文件路径来直接进行读取
        * */
        fs.readFile(`.${url}`, (err, data) => {
            if (err) return res.end('404 Not Found')
            res.end(data)
        })
    } else { // 找不到 - 404处理
        fs.readFile('./views/404.html', (err, data) => {
            if (err) return res.end('404 Not Found')
            res.end(data)
        })
    }
}).listen(7000, () => {
    console.log('runing at http://127.0.0.1:7000/')
})