/**
 @Author：Wyunfei
 @Date：2019/1/10/11:54
 @FileName: app.js
 */
let express = require('express')

let app = express()
let bodyParser = require('body-parser')

// 配置body-parser中间件(插件),专门用来解析post请求
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
* 配置使用art-template模板引擎
*   第一个参数，表示，当渲染以.art结尾的文件时，使用art-template模板引擎
*       这里的后缀也可以改为html，这样的话加载的文件就是HTML文件了
*
*   express-art-template 是专门用来在Express中把 art-template 整合到Express中的
*   虽然外面不需要加载art-template但是也需要安装，因为express-art-template依赖于art-template
*
*
*
* */
app.engine('html', require('express-art-template'))


// 开放资源
app.use('/public/', express.static('./public/'))




/*
* Express 为 Response响应对象提供了一个方法render
* render 方法默认是不能使用的，但是如果配置了模板引擎就可以使用了
* 使用方式：
*   res.render('html模板名', { 模板数据 })
*   第一个参数不能写路径，默认会去项目中的views目录中去查找模板
*   也就是说Express有个约定，开发人员需要把所有的视图文件放在views目录中
*
*   如果想要修改默认的views目录，则可以这么做：
*       app.set('views', 要更改的路径)
*       第一个参数就是写死的 views
*       第二个参数是更改后的路径
*
* */

app.get('/', (req, res) => {
    res.render('index.html', {
        commentsData
    })
})
app.get('/post', (req, res) => {
    res.render('post.html')
})


// 当以 post 请求 /post 路径的时候，执行指定的处理函数
// 这样的话我们就可以利用不同的请求方式，让一个路径使用多次
app.post('/post', (req, res) => {
    console.log('收到表单的post请求了...')

    // 1、获取表单 提交 过来的数据
    // 2、处理
    // 3、发送响应
    // req.query 只能拿到get请求方式的数据
    let { body } = req
    body.dataTime = new Date().toLocaleString()
    commentsData.unshift(body)
    // 重定向到首页
    res.redirect('/')

})

app.listen(7000, () => {
    console.log('running at http://localhost:7000/')
})
