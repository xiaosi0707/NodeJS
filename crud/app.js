/**
 @Author：Wyunfei
 @Date：2019/1/10/16:38
 @FileName: app.js
    职责：
    启动服务
    做一些服务相关配置
        模板引擎
        body-parser
        静态资源服务
        监听端口
        挂载路由
 */
let express = require('express')
let app = express()
let router = require('./router.js')

// 4、把路由容器挂载到 app 服务中
app.use(router)

app.engine('html', require('express-art-template'))

// 设置开放目录
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public'))


app.listen(7000, () => {
    console.log('running at http:/localhost:7000/')
})
