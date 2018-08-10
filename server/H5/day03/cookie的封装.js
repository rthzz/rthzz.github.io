/* 实现 cookie 封装  获取/设置cookie  */
var myCookie = {
  // 设置 cookie  参数: key , value  有效时间(days); 
  set: function(key, value , days){
     // 使用 document.cookie
     window.document.cookie = key+"="+value+";path=/;Max-age="+days*24*3600; // 国际标准时间;   
  },
  // 获取cookie 
  get: function(key){
     // 1. 按照 "; " 来切割键值对 
     var res = document.cookie.split("; ");
     // 2. 遍历 数组中的元素
     for(var i=0;i<res.length;i++){ 
        // 3. 把当前元素 按照 "=" 来切割 , 保存 result 中
        var result = res[i].split('=');
        // 4. 判断 key  和  result[0] 
        if(key === result[0]){
            // 5. 返回 result[1]
            return result[1];
        }   
     }        
  }
}; 