/**
 @Author：Wyunfei
 @Date：2019/1/4/16:35
 @FileName: a
 */
let foo = require('./b.js')
console.log(foo) // 输出b.js中的变量foo
console.log(foo.add(1,2))
