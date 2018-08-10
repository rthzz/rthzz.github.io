/* 封装一个方法, 存取数据都是对象的形式 
    1. 存数据是以  json 格式存 
    2. 取数据得到的是 JS 对象
    3. 给这个方法添加一个过期时间, 本身localStorage没有提供
        参数: 3个 
          key,  value , days (过期时间) 
 */
var myLocalStorage = {
   // 设置值, 和过期时间 , 参数以对象形式传入
   set: function(key, value, days){
       var item = {
           data: value,
           // 当前时间 + 有效时间 = 过期时间/ms
           endTime: new Date().getTime() + days*24*3600*1000  
       };
       localStorage.setItem(key, JSON.stringify(item));
   },
   // 获取值的方法 
   get: function(key){
      var val = localStorage.getItem(key);
      if(!val){ return null  };
      // 把 json 字符串转化成 JS 对象
      val = JSON.parse(val);
      // 判断有效时间 
      if(new Date().getTime() > val.endTime){
          // 判断进入,表示过期 
          localStorage.removeItem(key);
          val  = null;  
      } 
      return val;
   } 
};