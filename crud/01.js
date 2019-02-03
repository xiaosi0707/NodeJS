/**
 @Author：Wyunfei
 @Date：2019/1/11/15:32
 @FileName: 01.js
 */


function get(url, callback) {
    let oReq = new XMLHttpRequest()

    // 当请求成功之后，调用回调函数
    oReq.onload = () => {
        // 我们需要通过回调函数的方式得到 oReq.responseText
        callback(oReq.responseText)
    }

    oReq.open('get', url, true)
    oReq.send()
}

get('db.json', (data) => {
    console.log(data)
})


