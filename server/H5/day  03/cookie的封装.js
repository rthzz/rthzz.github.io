//实现cookie的封装
var myCookie={
    //设置cookie
    set:function (key,value ,days) { 
        //使用document.cookie 
            window.document.cookie =key+'='+value+';payn=/;Max-age='+days*24*3600;//国际标准时间

    },
    //获取cookie
    get:function(key){
        //按照';'来切割键值对
      var arr=document.cookie.split('; ');

        //遍历数组中的每个元素
        for(i=0;i<arr.length;i++){

            var  result= arr[i].split('=');
           if(key===result[0]){
               return result[1]
           }
        }
          //把当前元素按照'='切割 保存result
          //判断key和 resukt[0]
          //返回result[1]
    }
}

