# 第一章

## 为什么要学习NodeJS？

- 企业需求
  + 具有服务器端开发经验更好
- 打开服务端这个黑盒子，只有懂服务端才能更好的和后台开发人员进行协同开发

### 课程目标
- 服务端
- 前端
- 服务器部署

### NodeJS是什么？
- Web后台语言
  + Java
  + PHP
  + ruby
  + .Net
  + python
  + ...
  + NodeJS（熟悉的JavaScript语言，门槛较低；凡是能用JavaScript实现的，都会用JavaScript实现，无处不在，学好JavaScript走遍天下都不怕）

- 构建于Chrome的V8引擎之上（**JavaScript引擎**是一个专门处理[JavaScript](https://baike.baidu.com/item/JavaScript)脚本的[虚拟机](https://baike.baidu.com/item/%E8%99%9A%E6%8B%9F%E6%9C%BA/104440)，一般会附带在[网页浏览器](https://baike.baidu.com/item/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8/8309940)之中）

  - 代码其实只是具有特定格式的字符串而已
  - 引擎可以认识它，帮助你去解析和执行
  - Google Chrome的V8引擎是目前公认的解析JavaScript代码最快最高效的
  - NodeJS的作者把GoogleChrome的V8引擎移植出来了，开发了一个独立的JavaScript运行时环境

- NodeJS

  - 不是一门语言
  - 不是库，不是框架
  - 是一个JavaScript运行时环境
  - 简单来讲NodeJS可以解析和执行JavaScript代码，脱离浏览器来运行，一切都归功于NodeJS，NodeJS就是一个平台
  - 以前只有浏览器可以解析执行JavaScript代码

- 浏览器中的JavaScript

  - ECMAScript
    - 基本语法
    - if
    - var
    - function
    - object
    - Array
    - 没有DOM、BOM、document、window......
  - BOM
  - DOM

- NodeJS中的JavaScript

  - 没有BOM、DOM，不处理页面相关
  - 有ECMAScript
  - 在NodeJS这个JavaScript执行环境中为JavaScript提供了一些服务器级别的的操作API
    - 文件读写
    - 网络服务的构建
    - 网络通信
    - http服务器
    - ......

- NodeJS特性

  - 事件驱动
  - 非阻塞IO模型（异步）
  - 轻量和高效

- npm

  - 是世界上最大的开源库生态系统

  - 绝大多数JavaScript相关的包都存放在了npm上，为了让开发人员更方便的下载使用`npm install jquery`就可以使用了

    [^没有npm]: 找到官网，下载下来，script引入，才能使用


### NodeJS能做什么？

- Web服务器后台
- 命令行工具（通过命令做操作比如git）
  - npm
  - git(c语言，node也可以做)
-  对于前端开发者来说接触NodeJS最多的就是他的命令行工具
  - webpack
  - gulp
  - npm
  - ......

### 预备知识

- HTML
- css
- JavaScript
- 简单的命令行操作
  - cd、dir、ls......
- 具有服务端开发经验更加



### 一些资源

- 深入浅出NodeJS
  - 偏理论，几乎没有任何实战内容
  - 理解原理底层比较有帮助
  - 可以结合实战去看
- NodeJS权威指南
  - API讲解
  - 没有业务，没有实战
- javascript标准参考教程：<https://wangdoc.com/javascript/>
- NodeJS入门：<https://www.nodebeginner.org/index-zh-cn.html>
- 官方API文档：<https://nodejs.org/en/docs/>
- cnode社区：<https://cnodejs.org/>
- 新手入门：<https://cnodejs.org/getstart>



### 能学到什么？

- B/S编程模型

- Browser - Server

- back - end

- 任何服务端技术这种B/S编程模型都一样，和语言无关

- NodeJS只是作为我们学习B/S编程模型的一个工具而已

- 模块化编程思想

- RequireJS

- SeaJS

- 以前认知的javascript只能通过script标签进行加载

- 在NodeJS中可以像@import('文件名')一样来引用加载javascript脚本文件

- NodeJS常用API

- 异步编程

- 回调函数

- Promise

- async

- generator

- Express Web 开发框架

- ECMAScript6

- 在课程中穿插讲解

- 学习NodeJS不仅会帮助你打开服务端黑盒子，同时会帮助你学习以后的前端高级内容

- Vue.js

- React.js

- angular

- ......



## 起步

### 安装NodeJS环境

- 查看当前NodeJS环境的版本号

- 下载：<https://nodejs.org/zh-cn/>

- 安装
  - 一路next即可

- 确认NodeJS环境是否安装成功
  - 打开命令行，node -v，出现版本号-安转成功

- 环境变量

### Hello World

- 创建编写JavaScript脚本文件
- 打开终端，定位到脚本文件所属目录
- 输入JavaScript文件名执行对应的文件
- 源码

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/4/9:28
 @FileName: helloworld
 */
let foo = 'bar';
console.log(foo)
```

[^命名注意]: JavaScript文件命名，不要使用中文

### 没有DOM&BOM

- 源码

  ```javascript
  // 没有DOM&BOM
  console.log(window) // window is not defined
  console.log(document) // document is not defined
  ```

### 读取文件

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/9:28
   @FileName: helloworld
   */
  
  /**
   * fs是file-system的简写，就是文件系统的意思
   * 在NodeJS中想要进行文件操作，就必须引入fs这个核心模块
   * 在fs这个核心模块中，就提供了所有的文件操作相关的API
   * 例如：fs.readFile就是用来读取文件的
   *
   * PS：浏览器是不支持fs模块的，可以在HTML文件中通过script引入测试
   *
   * */
  
  // 1、使用require方法加载fs核心模块
  let fs = require('fs');
  
  /*
  * 2、读取文件
  *   参数一：文件路径
  *   参数二：回调函数
  *       参数一：error
  *               data undefined
  *               error 错误对象
  *       参数二：data
  *           成功：
  *               data 数据
  *               error null
  *
  *
  * */
  fs.readFile('../data/hello.txt', (err, data) => {
      console.log(err)
      console.log(data.toString()) // 文件中存储的其实都是二进制数据 0 1；那这里为什么看到的不是0和1，是因为2进制又转为了16进制了，但是无论是二进制还是16进制人类都不认识，只有计算机才知道，我们可以通过toString方法转换为我们能够认识的字符
  });
  ```

- ```
  
  ```

### 写文件

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/9:28
   @FileName: helloworld
   */
  let fs = require('fs');
  
  /*
  * 参数一： 文件路径
  * 参数二： 文件内容
  * 参数三： 回调函数
  *   参数：error（写入只有一个参数，只需知道写入结果即可）
      *   成功：
      *       文件写入成功
      *       error null
      *   失败：
      *       文件写入失败
      *       error 错误对象
  * */
  fs.writeFile('../data/new.txt', '大家好我是NodeJS', (err) => {
      if (err) {
          console.log('文件写入失败了')
      } else {
          console.log('文件写入成功了')
      }
  })
  ```

### 创建http服务器

- 在NodeJS中提供了一个核心模块http

- 职责就是创建和编写服务器的

- 源码  - 基本搭建

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、服务器要干嘛？
  *   提供服务，对数据的服务
  *   发请求
  *   接受请求
  *   处理请求
  *   返回请求
  *   注册request请求事件
  *   当客户端请求过来就会自动触发服务器的第一个参数request请求事件，然后执行第二个参数，回调处理函数
  * */
  server.on('request', () => {
      console.log('收到客户端的请求了...')
  })
  
  /*
  * 4、绑定端口号，启动服务器
  *       凡是涉及到网络通信的一定就有端口号
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

- 源码 - 具备处理响应的能力

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  *   request请求对象：
  *       可以用来获取客户端的一些请求信息，例如请求路径
  *   response响应对象
  *       可以用来给客户端发送响应消息
  * */
  server.on('request', (request, response) => {
      console.log(`收到客户端的请求了，请求路径是：${request.url}`)
      // response对象有一个方法，write可以用来给客户端发送响应数据；write可以使用多次，但是最后一定要用end来结束响应，否则客户端会一直等待...
      response.write('hello')
      response.write('hi')
      // 告诉客户端我的话说完了，你可以返回给用户了
      response.end()
  
      // 看着没杠，复制下地址栏粘贴过来有杠：http://127.0.0.1:7000/
  
  })
  
  /*
  * 4、绑定端口号，启动服务器
  *       凡是涉及到网络通信的一定就有端口号
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

- 源码 - 返回值的处理

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      console.log(`收到客户端的请求了，请求路径是：${req.url}`)
  
      // 直接把内容放到end()方法里面要比write()简洁的多，而且多次write的场景几乎没有
      // res.end('hello NodeJS')
  
  
  
      /*
      * 根据不同的请求路径返回不同的响应的结果
      *   1、获取请求路径
      *   2、判断路径处理响应
      * */
      // let url = req.url
      // console.log(url)
      // if (url === '/') {
      //     res.end('index')
      // } else if (url === '/login') {
      //     res.end('login')
      // } else {
      //     res.end('404 Not Found')
      // }
  
  
  
      /*
      * 返回类型：只能是字符串或二进制数据
      * 数字、对象、数组、布尔值都不行
      * */
      // res.end(123) // 报错，类型不对
  
  
      /*
      * 解决方案
      *   JSON.Stringify()
      * */
      let dataList = [
          {
              name: 'iphone8',
              price: '6666'
          },
          {
              name: 'iphone8 plus',
              price: '8888'
          },
          {
              name: 'iphoneX',
              price: '10888'
          }
      ]
      res.end(JSON.stringify(dataList))
  
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

## NodeJS中的JavaScript

### ECMAScript

### 核心模块

- NodeJS为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。例如文件操作的FS文件系统、http服务器、path路径、OS操作系统信息......

- 只要用到核心模块就得通过require加载进来，例如：

  ```javascript
  let http = require('http')
  ```


### 第三方模块

### 用户自定义模块 

- NodeJS中如何执行多个JavaScript文件？这是个问题

  - 模块化

    - require()是一个方法

    - 它的第一个作用就是用来加载且执行模块中的代码

      ```javascript
      /**
       @Author：Wyunfei
       @Date：2019/1/4/16:35
       @FileName: a.js
       */
      
      console.log('a start')
      require('./b.js')
      console.log('a end')
      ```

      ```javascript
      /**
       @Author：Wyunfei
       @Date：2019/1/4/16:35
       @FileName: b.js
       */
      console.log('b start')
      require('./c.js')
      console.log('b end')
      ```

      ```javascript
      /**
       @Author：Wyunfei
       @Date：2019/1/4/16:38
       @FileName: c.js
       */
      console.log('c.js加载并执行完毕！')
      ```

    - 在NodeJS中模块有三种

      - 具名的核心模块，例如：fs、http......
      - 用户自己编写的文件模块

    - NodeJS中没有全局作用域，只有模块作用域

      ```javascript
      /**
       @Author：Wyunfei
       @Date：2019/1/4/16:35
       @FileName: a.js
       */
      let foo = 'aaa'; // NodeJS中只有模块作用域，没有全局作用域
      console.log('a start')
      
      // 模块作用域
      function sum(x, y) {
          return x + y
      }
      
      require('./b.js')
      console.log('a end')
      console.log(foo) // aaa，b.js中的foo变量并不会把foo覆盖掉
      ```

      ```javascript
      /**
       @Author：Wyunfei
       @Date：2019/1/4/16:35
       @FileName: b.js
       */
      let foo = 'bbb'; // NodeJS中只有模块作用域，没有全局作用域
      console.log('b start')
      require('./c.js')
      
      sum(1, 2) // 模块作用域导致没有b.js拿不到a.js中的sum方法，因此报错
      
      console.log('b end')
      ```

      [^路径问题]: 相对路径必须加./，不加的话NodeJS会把加再进来的东西当做核心模块
      [^后缀问题]: 可以省略后缀名

    - 模块通信

      - require的第二个作用是，拿到被加载模块导出的接口对象

      - 每个模块中都提供了一个对象，exports，默认是一个空对象

      - 可以把所有需要被外部访问的成员都添加到exports对象中

      - 源码

        ```
        /**
         @Author：Wyunfei
         @Date：2019/1/4/16:35
         @FileName: a.js
         */
        let foo = require('./b.js')
        console.log(foo) // 输出b.js中的变量foo
        console.log(foo.add(1,2))
        ```

        ```javascript
        /**
         @Author：Wyunfei
         @Date：2019/1/4/16:35
         @FileName: b.js
         */
        let foo = 'bbb';
        
        
        exports.add = function(a, b) {
            return a + b
        }
        exports.foo = foo
        
        
        //一下这两个都无法访问，因为没有挂载到exports对象上
        let age = 20;
        function add(a, b) {
            return a*2 + b*2
        }
        
        // 核心模块实现举例
        exports.readFile = function (path, callback) {
         // 巴拉巴拉......
        }
        ```

## IP地址和端口号

### 详解

- 所有联网的程序都需要进行网络通信
- 计算机中只有一个物理网卡
- 在同一个局域网中网卡地址必须是唯一的
- 网卡是通过IP地址进行定位的

### 流程

1. http://www.baidu.com

2. DNS解析域名成IP地址

3. 通过IP地址定位到服务器

4. 通过端口号定位应用程序（qq、微信、王者荣耀、吃鸡......）

5. 源码

   ```javascript
   /**
    @Author：Wyunfei
    @Date：2019/1/4/11:35
    @FileName: http
    */
   
   // 1、加载http模块
   let http = require('http');
   
   // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
   let server = http.createServer();
   
   /*
   * 3、request请求事件处理函数，接收两个参数
   * */
   server.on('request', (req, res) => {
       console.log(`客户端的请求地址是：${req.socket.remoteAddress}；端口号是：${req.socket.remotePort}`)
   })
   
   /*
   * 4、绑定端口号，启动服务器
   * */
   server.listen(7000, () => {
       console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
   })
   ```

6. 端口号的范围：0 - 65536

7. 在计算机中有一些默认的端口号，最好不要去使用

   1. 例如，浏览器的80端口
   2. ......

8. 在开发过程中随意编写一个有效且好记的就可以了

9. 可以同时开启多个服务，但一定要确保不同服务占用的端口号不一致才可以

## 响应内容类型

### 返回数据乱码问题

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      res.end('hello 世界!')
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

### 乱码解决方案

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      /*
      *   服务器默认发送的数据是UTF-8编码的内容（国际标准编码）
          浏览器不知道服务器编码的情况下，会按照当前操作系统默认编码去解析，由于是中文操作系统默认是gbk编码
          服务器你用的uft-8，浏览器用gbk去解析，你说能对么？
      * */
  
      // 所以结果就是乱码了
      // res.end('hello 世界!')
  
  
      // 解决方案：正确的告诉浏览器我给发送的内容是什么编码 的就可以了
      // 在http协议中，Content-Type就是用来告知对方我给你发送的数据是什么类型，然后客户端就会根据服务器指定的类型进行识别
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('hello 世界!')
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

### Content-Type类型 - text/html

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      let url = req.url
      if(url === '/plain') {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          res.end('hello，世界') // hello, 世界
      } else if(url === '/html') {
          // 1
          // res.end('<p>hello html</p>') // hello html 在服务器眼里是字符串，在浏览器眼里是HTML标签
  
          // 2
          // res.end(`<p>hello html <a href="">点击</a></p>`) // “点击”是乱码了
  
  
          // // 3
          // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          // res.end(`<p>hello html <a href="">点击</a></p>`) // 乱码倒是解决了，但是  全部解析成了文本，也不是我们想要的结果
  
          // 4 - 解决方案
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end(`<p>hello html <a href="">点击</a></p>`) // 文本 + HTML解析 OK 了
  
      }
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

### 请求、解析不同的文件

- Content-Type类型对照表：http://tool.oschina.net/commons

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http
   */
  
  // 1、加载http模块
  let http = require('http');
  let fs = require('fs')
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      let url = req.url
      if (url === '/') {
          fs.readFile('./resource/index.html', (err, data) => {
              if(err) {
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                  res.end('文件读取失败，请稍后重试')
              } else {
                  // data默认是二进制数据，可以通过toString()转为可以识别 字符串
                  // res.end()支持两种类型，一种是二进制，另一种是字符串
                  res.setHeader('Content-Type', 'text/html; charset=utf-8')
                  res.end(data)
              }
          })
      } else if (url === '/img') {
          fs.readFile('./resource/students.jpg', (err, data) => {
              if(err) {
                  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                  res.end('文件读取失败，请稍后重试')
              } else {
                  // data默认是二进制数据，可以通过toString()转为可以识别 字符串
                  // res.end()支持两种类型，一种是二进制，另一种是字符串
                  // 图片资源不需要指定编码了，我们常说的编码一般是指字符编码
                  res.setHeader('Content-Type', 'image/jpeg')
                  res.end(data)
              }
          })
      }
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```



# Tips：JavaScript编码规范

- [JavaScript standard Style](https://standardjs.com/)

- [Airbnb JavaScript](https://github.com/yuche/javascript)

- 分号是否省略众说纷纭，不加也行

- 当你采用了无分号代码风格后需要注意以下三种情况：

  - 当一行代码是以()、[]、` 开头的时候，则在前面补上分号，避免一些语法解析错误

  - 源码

    ```javascript
    /**
     @Author：Wyunfei
     @Date：2019/1/6/12:20
     @FileName: 分号 - 小括号开头了
     */
    function fn() {
        console.log('hello NodeJS')
    }
    fn()
    
    ;(() => { // 以小括号开头的，需要加上分号，否则报错...
        console.log('hi NodeJS')
    })()
    ```

    ```javascript
    /**
     @Author：Wyunfei
     @Date：2019/1/6/12:20
     @FileName: 分号 - 中括号开头了
     */
    function f() {
        console.log('hello NodeJS')
    }
    f()
        
    ;['苹果', '香蕉'].forEach((item) => { // 以中括号开头的需要加上分号
        console.log(item)
    })
    ```

    ```javascript
    /**
     @Author：Wyunfei
     @Date：2019/1/6/12:20
     @FileName: 分号 - 超级字符串开头了
     */
    function f() {
        console.log('hello NodeJS')
    }
    f()
    
    ;`hello`.toString() // 超级字符串开头的不行哦...
    ```

- 你可能看到有些插件、库都是以分号(也不一定非是分号，！、~等也行，只推荐使用分号开头)开头的，它们其实就是为了避免代码解析报错



# 第二章

## 仿Apache服务器

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http - 仿Apache服务器
   */
  
  /*
  * 一步步推演 - 实现Apache服务器
  * */
  
  const wwwDir = 'G:/NodeJS/www' // apache服务器的默认资源目录www
  
  // 1、加载http模块
  let http = require('http');
  let fs = require('fs')
  
  // 2、使用http.createServer()方法创建一个web服务器，返回一个server实例
  let server = http.createServer();
  
  /*
  * 3、request请求事件处理函数，接收两个参数
  * */
  server.on('request', (req, res) => {
      let url = req.url // 请求的URL
      let filePath = '/index.html' // filePath默认加载的页面
      if (url !== '/') { // 如果不是首页那么就赋值
          filePath = url
      }
  
      fs.readFile (wwwDir + filePath, (err, data) => {
          if (err) {
              return res.end('404 Not Found')
          }
          res.end(data)
      })
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

## 仿Apache下的www目录列表

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: http.js - 仿Apache www目录
   */
  
  /*
  * 一步步推演 - 实现Apache服务器
  * */
  
  const wwwDir = 'G:/NodeJS/www' // apache服务器的默认资源目录www
  
  // 1、加载http模块
  let http = require('http');
  let fs = require('fs')
  
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
              let content = ''
              // 遍历目录中的文件
              files.map(item => {
                  content += `<tr>
          <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
          <td class="detailsColumn" data-value="0"></td>
          <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
        </tr>
  `
              })
  
              // 二进制 转 字符串
              data = data.toString()
              // 从template.html找到^_^，替换为content
              data = data.replace('^_^', content)
              console.log(data)
              // 返回处理过后的HTML
              res.end(data)
          })
  
      })
  })
  
  /*
  * 4、绑定端口号，启动服务器
  * */
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>template.html</title>
  </head>
  <body>
  <div>
      <table>
          <tbody>
          ^_^
          </tbody>
      </table>
  </div>
  </body>
  </html>
  ```

## art-template模板引擎介绍

- 在当前目录下通过命令```npm install art-template```安装此模板引擎

- 在需要使用 的文件模块中加载art-template，```let artTemplate = require('art-template')```

- 查文档，使用API

- art-template可以使用服务器中也可以使用在浏览器端

- 源码

  ```javascript
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
              ]
          })
          // console.log(ret)
          res.end(ret)
      })
  })
  
  server.listen(7000, () => {
      console.log('服务器启动成功了，可以通过http://127.0.0.1:7000/来进行访问...')
  })
  ```

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>tpl.html</title>
  </head>
  <body>
  <div>
      <p>大家好，我是{{ name }}</p>
      <p>我今年，{{ age }}岁了</p>
      <p>我来自{{ province }}</p>
      <p>我喜欢{{ each hobbies }} {{ $value }} {{ /each }}</p>
  </div>
  </body>
  </html>
  ```

## 使用art-tpl改进Apache目录

- 源码

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/4/11:35
   @FileName: art-teplate改进Apache www目录
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
  ```

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>template.html</title>
  </head>
  <body>
  <div>
      <h1>{{ title }}</h1>
      <div>
          <p>
              {{ each files }} <p><a href="">{{ $value }}</a></p> {{ /each }}
          </p>
      </div>
  </div>
  </body>
  </html>
  ```

## 渲染机制

- [客户端渲染流程图](https://drive.wps.cn/view/l/s333g9f)

- [服务端渲染流程图](https://drive.wps.cn/view/l/sx1cyuc)

- 客户端和服务端对比

  - 服务端渲染更快 - 1次

  - 客户端慢 - 2次

  - 服务端渲染用户不能提早看到页面因为页面和数据是一起返回给客户端的

  - 客户端渲染用户能够早些看到页面，因为先页面后渲染

  - 服务端渲染 - 能够看到所有的源代码（比如商品名称，能搜到就是服务端）

  - 客户端渲染 - 看不到所有的源代码（比如商品名称，搜不到就是客户端）

  - 服务端有利于SEO

  - 客户端不利于SEO

  - 服务端需要整页刷新，体验差

  - 客户端体验更好一些，可以异步

    > 各有利弊，根据具体场景，采用不同的渲染机制，很多网站两者混用，比如的京东的商品列表目的是为了SEO，而评论无需考虑SEO因此采用了客户端渲染。

# 第三章：留言板Demo

1. [服务器创建](https://github.com/xiaosi0707/NodeJS/commit/1fc8ef3edbaeae03499ff106a70809222438ac34)

2. [静态资源处理](https://github.com/xiaosi0707/NodeJS/commit/0e6b51971f614c2f97aa105a1279d106bd92c4c1)

3. [404处理](https://github.com/xiaosi0707/NodeJS/commit/ec4fe96ff409e9adda22732ab6b47ae11c3b7949)

4. [路由配置](https://github.com/xiaosi0707/NodeJS/commit/47224d103af06b3a8bb4d73b27639dca2010c3f3)

5. [模板引擎渲染数据](https://github.com/xiaosi0707/NodeJS/commit/340d92ae59f9bd74ef0b794d7c92b76bb0577573)

6. [处理Get提交的数据](https://github.com/xiaosi0707/NodeJS/commit/0c4e911af6abba6bb44f8ac23eec7ce3fd8cb2d0)

7. [数据处理完成重定向到首页](https://github.com/xiaosi0707/NodeJS/commit/39803e0b43151b67a463835194d3125a4aa4db9e)

8. 重定向

   - 301 永久重定向，浏览器会记住
     - 假如你访问了a.com 跳到了 b.com；下次你访问a.com浏览器压根就不发请求了，直接就跳到了b.com
   - 302 临时重定向，浏览器不记忆
     - a.com 跳到 b.com 总是会请求a.com
     - sina.com -> sina.com.cn 新浪就是永久重定向

   > 总结：NodeJS不太适合没有接触过服务器开发的人学习，因为比较偏底层；它不像Java、PHP把一些底层的东西已经封装了，根本就接触不到底层，入门较为容易。



# 第四章：NodeJS中的模块系统

## NodeJS中编写程序的核心

- ECMAScript语言
  - 在NodeJS中没有DOM和BOM
- 核心模块
  - 文件操作的 fs
  - http服务的 http
  - URL路径操作模块
  - path路径处理模块
  - OS操作系统信息模块
- 第三方模块
  - art-template
  - 除了第三方的其它的不用```npm install```
- 咱们自己写的模块
  - 自己创建的文件

## 什么是模块化？

- 文件作用域
- 通信规则
- + 加载require
  + 导出exports

## CommonJS 模块规范

> 在NodeJS中JavaScript有一个很重要的概念，模块系统

- 模块作用域

- 使用require用来加载模块

- 使用exports接口对象导出模块中的成员

- 源码 - exports导出对象

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: app.js
   */
  
  /*
  * 默认得到的是对象
  * 使用对象中的成员，必须点儿一下某个成员才能使用
  *
  * */
  
  let exportsObj = require('./common')
  console.log(exportsObj)
  ```

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: common.js
   */
  let foo = 'bar'
  function fn(x, y) {
      return x + y
  }
  
  /*
  * 只能得到我想要给你的成员
  * 这样做 的目的是为了解决变量命名冲突问题
  * */
  exports.foo = foo
  exports.fn = fn
  
  /*
  * exports是一个对象
  * 我们可以多次为这个对象添加成员
  * */
  ```

- 源码 - module.exports 直接导出某个成员

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: app.js
   */
  
  /*
  *
  * 但是有的时候对于一个模块我们仅仅是希望  导出一个方法就可以了，该怎么办？
  *
  * */
  
  let exportsObj = require('./common')
  console.log(exportsObj(1, 2))
  ```

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: common.js
   */
  function fn(x, y) {
      return x + y
  }
  
  // 如果一个模块需要直接导出某个成员，而非采用挂载的方式；这个时候需要使用 module.exports
  module.exports = fn
  /*
  * exports是一个对象
  * 我们可以多次为这个对象添加成员
  *
  * 现在我有一个需求：
  *   我希望直接加载得到的是一个
  *       方法
  *       字符串
  *       数组
  *       数字
  *       ...
  * */
  ```

### 加载require

- 语法

  ```javascript
  let 变量名 = require('模块名称')
  ```

- 两个作用

  - 执行被加载到模块中的代码
  - 得到```exports```导出的接口对象

### 导出exports

- NodeJS中是模块作用域，默认文件中所有的成员还在当前文件中有效，对于希望可以被其它模块访问的成员，我们就需要把这些公开的成员挂载到```exports```接口对象中就可以了 

- 导出多个成员 

  ```javascript
  exports.成员key = 成员value
  ```

- 导出单个成员 

  ```javascript
  module.exports = 成员value
  ```

- 以下情况会覆盖

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: common.js
   */
  function fn(x, y) {
      return x + y
  }
  
  module.exports = fn
  
  // 以这个为准，后者会覆盖前者
  module.exports = 'hello'
  ```

- 也可以这样导出多个成员

  ```javascript
  /**
   @Author：Wyunfei
   @Date：2019/1/8/10:31
   @FileName: common.js
   */
  
  module.exports = {
      add (x, y) {
          return x + y
      },
      str: 'hello'
  }
  ```

### 原理解析

```exports``` 和 ```module.exports```的一个引用

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/8/10:31
 @FileName: common.js
 */

// let module = {
//     exports = {
//
//     }
// }
//
// let exports = module.exports

console.log(exports === module.exports) // true

exports.foo = 'bar'
// 等价于
module.exports.foo = 'bar'

return module.exports
```

### exports&module.exports的区别

- 每个模块中都有一个module对象

- module对象中有一个exports对象

- 我们可以把需要导出的成员挂载到module.exports 接口对象中，也就是```module.exports.xxx = xxx```的方式，但是每次```module.exports.xxx```很麻烦，点的太多了

- NodeJS为了方便，同时在每个模块中提供了一个成员叫```exports```

- ```exports === module.exports```结果为true，所以对于```module.exports.xxx```完全可以```exports.xxx```这么去写

- 当一个模块导出单个成员的时候，必须使用```module.exports = xxx```的方式，不要使用```exports = xxx```的方式

- 当需要导出多个成员的时候，使用```exports.xxx = xxx```或使用```module.exports = {foo: 'bar, fn: () => {}'}```

  > 总结：每个模块最终return的是modules.exports；exports只是module.exports的一个引用而已，目的只是为了简化写法。

### require方法加载规则

- 优先从缓存中加载

  ![](C:\Users\Administrator\Desktop\2019-01-08_184319.png)

- 判断模块标识

- - 路径模块

    - ./ 当前目录，./不可省略，省略来了就成了加载模块

    - ../上一级目录不可省略，同理

    - /xxx几乎不用，根目录

    - d:/a/foo.js绝对路径，几乎不用

    - .js后缀可省略

    - 示例：

      ```javascript
      require('./index')
      ```

      > 文件操作的相对路径可以省略./；模块操作不能省略./
      >
      > ./data/a.txt  相对于当前目录
      > data/a.txt    相对于当前目录
      > /data/a.txt   绝对路径，当前文件模块所处磁盘的根目录
      > c:/xx/xxx/..  绝对路径

  - 核心模块

    - 核心模块的本质也是文件

    - 核心模块文件已经被编译到了二进制文件中，我们只需要按照名字加载就可以了

    - 示例：

      ``` javascript
      require('fs')
      require('http')
      ```

  - 第三方模块

    - 凡是第三方模块都必须通过 ```npm ``` 来下载

    - 使用的时候就可以通过require('包名')的方式来进行加载就可以使用了

    - 示例：

      ```javascript
      let template = require('art-template')
      ```

    - 不可能有任何一个第三方包和核心模块的名字是一样的

    - 加载顺序：

      - 缓存
      - 先看下是不是路径模块和核心模块，都不是那么往下走
      - 再找到当前文件所属目录中的 ```node_modules``` 目录
      - ``` node_modules/art-template/package.json/main/入口模块index.js/再通过require加载其它的... ```
      - 实际上最终加载的还是文件
      - 如果package.json文件不存在或main.js指定的入口模块也没有，则NodeJS会自动找该目录下的index.js，被作为默认选项
      - 如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules目录查找，如果上一级还没有则继续往上找，如果知道磁盘根目录还找不到，那么就报错了“Can not find module xxx”

    - 示例：

      ```shell
      blog
      	a/
              node_modules
      			art-template
      		foo.js
      	b/ 
      		let foo = require('../a/foo.js') // 可以加载
      		a目录中的第三方包是不能通过require('art-template')这种方式加载的
      		你可以这样：
      			require('../a/node_modules/art-template/index.js')
      ```

      > 注意，我们一个项目中有且只有一个node_modules，放在项目的根目录中，这样的项目中所有的子目录都可以查找到，不会出现一个项目中有多个node_modules

  - 总结：

    - 不管是哪类模块都优先从缓存中加载
    - 第三方模块最为复杂

  - 扩展：

    - 《深入浅出NodeJS》 -  深入模块系统那一章节，可以好好阅读理解一下

### npm

- 全称：node package manager

- 网站：[npm官网](https://www.npmjs.com/)

- 命令行工具

  - 只要安装了node那么就安装了npm

  - 查看版本

    ```shell
    npm -v
    ```

  - 升级

    ``` shell
    npm install npm -g
    ```

  - 常用命令

    - npm init
      - npm int -y 可快速生成
    - npm install
    - npmm install 包名
      - 只下载
      - 简写：npm i 包名
    - npm install 包名 --save
      - 下载且保存到package.json里面的dependencies
      - 简写：npm i -S 包名
    - npm uninstall 包名
      - 只删除，package.json文件中的dependencies里依然存在
    - npm uninstall 包名 --save
      - 不仅删除且会清除package.json文件中的dependencies依赖项
      - 简写：npm un 包名 -S
    - npm help
      - 查看使用帮助
    - npm 命令 --help
      - 查看指定命令的使用帮助

  - 解决npm被墙的问题

    - npm包的服务器在国外，速度会很慢，这个问题我们需解决

    - 淘宝团队把npm在国内做了一个镜像(备份)

    - [cnpm官网](http://npm.taobao.org/)

    - 安装：

      ``` shell
      # 在任意目录执行都可以
      # -g 就是global的缩写，在电脑的任意位置执行即可
      npm install -g cnpm
      ```

    - 使用，把npm换成cnpm即可

      ``` shell
      # 这里走国外的服务器速度较慢
      npm install jquery
      # 这里走国内的服务器速度OK
      cnpm install jquery
      ```

    - 如果不想安装cnpm，又想使用淘宝镜像那么可以这么做：

      ```shell
      npm install jquery --registry=https://registry.npm.taobao.org     # 麻烦死你
      ```

    - 如果不想安装cnpm，又想使用淘宝镜像那么还可以这么做

      ```shell
      # 这样配置以后，通过npm下载包也会通过淘宝镜像安装
      npm config set registry https://registry.npm.taobao.org
      # 查看npm配置信息
      npm config list
      ```


### package.json

- 包的描述文件（说明书），用来描述项目依赖了那些第三方包和项目的基本信息(建议每个项目中要有)
- 这个文件可以手动创建更推荐使用命令```npm init```去创建
- ``` npm init ```说明：
  - name：项目名称
  - version：版本号
  - description：项目的描述
  - entry point：项目启动的入口文件
  - test command：测试指令
  - git repository：git地址
  - keywords：关键字，如果你要开发一个供别人下载使用包，放在npm网站上可以更容易被别人搜索到
  - author：作者
  - license：(ISC)开源许可证
- 建议每个项目的根目录下都有一个package.json文件
- 建议执行```npm install``` 包名的时候都加上--save这个选项，目的是保存依赖项信息
- 如果一不小心把```node_modules```目录删了，那么我们可以通过``` npm install ```指令把dependencies中的依赖项都重新下载回来，不用一个一个的安装包文件
- --save
  - ```npm install ```后面添加--save的目的是为了在package.json文件里面添加依赖项的说明，在里面创建一个key值叫做dependencies的对象，value值就是依赖项了
- --save-dev
- 建议每个项目中要有一个package.json

# 第五章：Express

## 为什么学习Express

>  原生的http在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，框架的目的就是提高效率，让我们的代码更高度统一。
>
> 在NodeJS中，有很多web开发框架，我们这里主要以学习Express为主。

[Express官网](http://www.expressjs.com.cn/)

## Express基本感知

``` javascript
/**
 @Author：Wyunfei
 @Date：2019/1/9/16:54
 @FileName: app.js
 */

// 引包
let express = require('express')

// 创建服务器
let app = express()

// 监听
app.listen(7000, () => {
    console.log('app is running at http://localhost:7000/')
})

//当服务器收到get请求/的时候，执行回调处理函数
app.get('/', (req, res) => {
    res.send('hello express')
})

app.get('/about', (req, res) => {
    res.send('你好，我是Express')
})

// 公开指定目录，你就可以直接通过url访问静态资源了
app.use('/public/', express.static('./public'))

```

## 起步

### 安装

```shell
npm install express --save
```

### hello world

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/10/9:34
 @FileName: app.js
 */

let express = require('express')

let app = express()

app.get('/', (req, res) => {
    // 原生NodeJS中的API依旧可以使用
    // res.write('hello world')
    // res.end()

    res.send('hello world')
})

app.listen(7000, () => {
    console.log('server runing at http://localhost:7000/')
})
```

### 基本路由

#### 概念

#### get

```javascript
app.get('/', (req, res) => {
    res.send('hi world')
})
```

#### post

```javascript
app.post('/', (req, res) => {
    res.send('hi world')
})
```

### 静态服务

#### 开发资源 - 第一种方式

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/10/9:34
 @FileName: app.js
 */

let express = require('express')

let app = express()

app.post('/', (req, res) => {
    res.send('hi world')
})

app.listen(7000, () => {
    console.log('server runing at http://localhost:7000/')
})

// 开放资源 - 当以 /public/ 开头的时候，去./public/ 目录中查找对应资源 - 这样(http://localhost:7000/public/img/同学们听我说.jpg)就可以访问了
app.use('/public/', express.static('./public/'))

```

#### 开放资源 - 第二种方式

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/10/9:34
 @FileName: app.js
 */

let express = require('express')

let app = express()

app.post('/', (req, res) => {
    res.send('hi world')
})

app.listen(7000, () => {
    console.log('server runing at http://localhost:7000/')
})

// 开放资源 - 当省略了第一个参数的时候，则可以通过省略/public 路径的方式访问资源 - 这样(http://localhost:7000/img/同学们听我说.jpg)就可以访问了
app.use(express.static('./public/'))

```

#### 开放资源 - 第三种方式

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/10/9:34
 @FileName: app.js
 */

let express = require('express')

let app = express()

app.post('/', (req, res) => {
    res.send('hi world')
})

app.listen(7000, () => {
    console.log('server runing at http://localhost:7000/')
})

// 开放资源 - 下面情况你可以把 aaa 理解为路径的别名，则需要通过 - 这样(http://localhost:7000/aaa/img/同学们听我说.jpg)的方式就可以访问了
app.use('/aaa/', express.static('./public/'))
```

## art-template配置及使用

### 官网[art-template](https://aui.github.io/art-template/)

### 安装

```shell
npm install art-template --save
npm install express-art-express --save
```

### 配置

```shell
app.engine('html', require('express-art-template'))
```

### 使用

```javascript
app.get('/', (req, res) => {
    // express 默认会去项目中的views目录查找demo.html
    res.render('demo.html', {
        title: '管理系统'
    })
})
```

### 自定义默认的views目录

```javascript
// 第一个参数就是写死的 views
// 第二个参数是更改后的路径
app.set('views', 要更改的路径)
```



### 示例代码

目录结构：

- /
  - views/
    - demo.html
  - app.js

源        码：

```javascript
/**
 @Author：Wyunfei
 @Date：2019/1/10/11:54
 @FileName: app.js
 */
let express = require('express')

let app = express()

/*
* 配置使用art-template模板引擎
*   第一个参数，表示，当渲染以.art结尾的文件时，使用art-template模板引擎
*       这里的后缀也可以改为html，这样的话加载的文件就是HTML文件了
*
*   express-art-template 是专门用来在Express中把 art-template 整合到Express中的
*   虽然外面不需要加载art-template但是也需要安装，因为express-art-template依赖于art-template
* */
app.engine('html', require('express-art-template'))

/*
* Express 为 Response响应对象提供了一个方法render
* render 方法默认是不能使用的，但是如果配置了模板引擎就可以使用了
* 使用方式：
*   res.render('html模板名', { 模板数据 })
*   第一个参数不能写路径，默认会去项目中的views目录中去查找模板
*   也就是说Express有个约定，开发人员需要把所有的视图文件放在views目录中
*
*   如果想要修改默认的views目录，则可以这么做：
*       app.set('views', render函数的默认路径)
*       第一个参数就是写死的 views
*       第二个参数是更改后的路径
*
* */

app.get('/', (req, res) => {
    res.render('demo.html', {
        title: '管理系统'
    })
})
app.get('/post', (req, res) => {
    res.send('/post')
})

app.listen(7000, () => {
    console.log('running at http://localhost:7000/')
})

```



# 其它

## 修改完代码自动重启

我们可以使用第三方开发工具，```nodemon```来帮助我们解决繁琐的修改代码后重启服务器问题，

```nodemon```是一个基于NodeJS开发的一个第三方命令行工具，我们使用的时候需要独立安装

安装

```shell
npm install nodemon -g
```

使用

```shell
# 之前运行使用 node app.js
# 现在把启动命令更换为：
nodemon app.js
```

只要通过```nodemon```启动的的服务，则它会监视你的文件的变化，自动帮你重启











