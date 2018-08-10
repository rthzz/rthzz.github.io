//封装一个方法,存储数据都是以对象的形式
//存数据以json格式
//取数据得到的是js对象
//给这个方法添加一个过期时间
//key value days(过期时间)
var myLocalStorage={
    //设置值和过期时间 参数以对象形式传入
    set:function(key,value,days){
           var item={
               data:value,
               //当前时间+有效时间=过期时间
               endTime:new Data().getTime+days*24*3600*1000,
            };
            localStorage.setItem(key,JSON.stringify(item);
    },
    //获取值的方法
    get:function(key){
        var val=localStorage.getItem(key);
         if(!val){
             return null;
         }
         val=JSON.parse(val);
         //判断有效时间
         if(new Data().getTime()>val.endTime){
             //判断进入表示过期
             localStorage.removeItem(key );
         }



         return val;

    }
}