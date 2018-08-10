window.ajax_tools = {
    xhr_get: function(url,data, success){
        var xhr = new XMLHttpRequest();
        // 判断 data 有没有 
        if(data){
             url += "?"+data;
        }
        xhr.open('get',url);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                  success(xhr.responseText); 
            }
        } 
    },
    xhr_post:function(url,data, success){
        var xhr = new XMLHttpRequest();
        xhr.open('post',url);
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        // 判断 data 有没有 
        if(data){
            xhr.send(data);
        }else{
            xhr.send();
        }
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                  success(xhr.responseText); 
            }
        }     
    },
 /* 封装 xhr_tools 
    将 get 和 post 请求封装到一起  , 
    1. url  : 请求的地址 
    2. data:  请求的数据 
    3. type :  请求的类型 
    4. success: 请求成功的回调函数  
    这些参数以对象形式传入, data数据格式也是对象 
    */ 
    xhr_tools: function(obj){
        var xhr = new XMLHttpRequest();  
        // 1. 判断请求方式  get / post  
        if(obj.type.toLowerCase() === 'get'){
            // 判断是否有 data
            if(obj.data){
                // key=value&key=value
                obj.url += '?'+this.setData(obj.data);
            } 
             xhr.open('get',obj.url);
             xhr.send(null);
        }else if(obj.type.toLowerCase==='post'){
            xhr.open('post',obj.url);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
             // 判断 data 
            if(obj.data){
                xhr.send(this.setData(obj.data));  
            }else{
                xhr.send();
            } 
        };
        // 2. 注册监听
        xhr.onreadystatechange = function(){
             if(xhr.readyState==4&&xhr.status==200){
                 obj.success(xhr.responseText); 
            }
        }
    },
    // 转化 data 数据 
    setData: function(data){
        var str = '';
        // 遍历data  
        for(var key in data){
          str +=  "&"+ key + "=" + data[key];
        };
        return str.slice(1);  
    }
};

 

