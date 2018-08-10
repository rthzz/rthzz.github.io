// 封装  Ajax 的 get 请求 
function xhr_get(url,data, success){
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
}
// 调用  
xhr_get('xxx.php','key=value&key=value',function(data){
    console.log(data);// data => xhr.responseText
});

// 封装 post 

// 封装 xhr_tools()
function xhr_tools(obj){

};
// 1. 传入参数以对象的形式传入 
xhr_tools({
   url: 'xxx.php',
   data: {
       key1:value1,
       key2:value2
   },
   success:function(data){

   }
});