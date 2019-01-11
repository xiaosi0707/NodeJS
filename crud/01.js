/**
 @Author：Wyunfei
 @Date：2019/1/11/15:32
 @FileName: 01.js
 */
/*
* 调用下面的 fn() 方法取到 return data 的值，该怎么做？
* */

// function fn() {
//     // 这种？ - NO
//     // setTimeout(() => {
//     //     let data = 'hello'
//     //     return data
//     // }, 1000)
//
//     // 这种？ -- NO
//     // let data = '默认数据'
//     // setTimeout(() => {
//     //     data = 'hello'
//     // }, 1000)
//     // return data
//
//     /*
//     * 怎么办？
//     * */
// }
// console.log(fn())


// 凡是想要得到方法内部的异步操作结果，则必须通过回调函数来获取
function fn(callback) {
    setTimeout(() => {
        let data = 'hello'
        callback(data)
    }, 1000)
}

fn((data) => {
    console.log(data)
})


