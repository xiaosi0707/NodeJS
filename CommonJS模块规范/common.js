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
