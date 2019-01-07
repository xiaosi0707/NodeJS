/**
 @Author：Wyunfei
 @Date：2019/1/4/16:35
 @FileName: b
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