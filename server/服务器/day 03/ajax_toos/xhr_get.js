//封装 ajax的get请求
function xhr_get(url, dat, success) {
    var xhr = new XMLHttpRequest();

    if (date) {
        url += '?' + date
    }
    xhr.open('get', 'url')
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText)
        }
    }
}

//调用
xhr_get('xxx.php', '')

//封装post
function xhr_post(url, date, success) {
    var xhr = new XMLHttpRequest();

    if (date) {
        url += '?' + date
    }
    xhr.open('post', 'url')


    if (date) {
        xhr.send(date)
    } else {
        xhr.send()
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            success(xhr.responseText)
        }
    }
}


//封装xhr_tools
//和post将get封装到一起
function xhr_tools(obj) {
    var xhr = new XMLHttpRequest
    //判断请求方式
    if (obj.type.tolowercase() === 'get') {
        //判断是否有data
        if (data) {
            obj.url += '?' + setdata(obj.data)
        }
        xhr.open('get', obj.url);
        xhr.send(null)
    } else if (obj.type.tolowercase() === 'post') {
        obj.type, tolowercase === 'post'
        xhr.open('post', obj.url)
        xhr.setRequestHeader('')
        if (onj.data) {
            xhr.send(setData(obj.data))
        } else {
            xhr.send()
        }
    };
    //注册监听
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            obj.success(xhr.responseText)
        }
    }
}

//转换data数据
function setData(data) {
    var str = '';
    //遍历data
    for (var key in data) {
        str += "&" + key + "=" + data[key]
    }
    return str.slice(1);
}
xhr.tools({
    type: 'get/post',
    url: 'xxx.php',
})


//1.传入参数以对象的形式传入

xhr_get({})