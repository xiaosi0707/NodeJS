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
let template = require('art-template')
let url = require('url')

// 模拟数据 - 评论
let commentsData = [
    {
        name: '孙权',
        message: '刘备向我借荆州，各位意下如何？',
        dataTime: new Date().toLocaleString()
    },
    {
        name: '曹操',
        message: '我要去攻打东吴，各位有没有什么好的建议啊？',
        dataTime: new Date().toLocaleString()
    },
    {
        name: '赵云',
        message: '主公，益州已占领，就不要再纵容手下人抢老百姓的东西啦...',
        dataTime: new Date().toLocaleString()
    },
    {
        name: '周公瑾',
        message: '主公，给我三万精兵，让我去会会曹操，我定可以凯旋归来...',
        dataTime: new Date().toLocaleString()
    }
]

/*
* 表单提交的数据处理：/pinglun?name=刘备&message=二位贤弟啊，我刘玄德对不住你们哇
*   对于这种表单提交的请求路径，由于URL中有用户自己写的内容
*   所以我们不可能通过判断完整的URL地址，来处理这个请求
*
*   我们只需要判断，如果你的请求地址是不是/pinglun其实就可以了
*
* */

// 简写
http.createServer((req, res) => {
    // url.parse()方法，将路径解析为一个方便操作的对象；
    // 第一个参数，要解析的URL地址；
    // 第二个参数为true可以直接将查询字符串转为一个对象
    let parseObj = url.parse(req.url, true)

    let { pathname } = parseObj

    if (pathname === '/') { // 首页
        fs.readFile('./views/index.html', (err, data) => {
            if (err) return res.end('404 Not Found')
            // art-template 绑定数据
            let htmlStr = template.render(data.toString(), {
                commentsData
            })
            res.end(htmlStr)
        })
    } else if (pathname === '/post') { // 发布留言
        fs.readFile('./views/post.html', (err,data) => {
            if (err) return res.end('404 Not Found')
            res.end(data)
        })
    } else if (pathname === '/pinglun') {

        let { query } = parseObj
        // 使用url模块中parse方法，把请求路径中的查询字符串解析成了一个对象
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(JSON.stringify(query))
        /*
        * 接下来要做的：
        *   1、获取表单提交的数据
        *   2、生成日期字段到数据中
        *   3、重定向到首页
        * */
    }  else if (pathname.indexOf('/public/') === 0) {
        /*
        * 统一处理静态资源：
        *   如果请求路径是以/public/开头的，则我认为你要获取public目录中的某个资源
        *   所以我们可以把请求路径当作文件路径来直接进行读取
        * */
        fs.readFile(`.${pathname}`, (err, data) => {
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