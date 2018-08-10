/* 鼠标事件 mousedown mousemove mouseup
    这三个事件一般是配合在一起使用的,所以我们在
    这里把三个事件封装到一起. 
    参数 : 
      elem: 需要绑定的DOM元素
      msd, msm, msu: 分别代表三个事件名    
*/
window.mouseEvent = {};
mouseEvent.mouse = function (elem, msd, msm, msu) {
  // 获取坐标方法 
  var getPoint = function (e) { // e->event
    var e = arguments[0] || window.event; // 兼容写法
    /* 将当前鼠标坐标值 - 元素的偏移值 = 鼠标在元素内的坐标
        pageX, pageY : 得到的是 当前鼠标坐标值
                                 以页面左侧为参考点 
        offsetTop,offsetLeft: 元素距离页面的值.             
    */
    var x = e.pageX - elem.offsetLeft,
          y = e.pageY - elem.offsetTop;
    // 返回 坐标 
    return { dx: x, dy: y }      
  };
  // mousedown 
  elem.addEventListener('mousedown',function(e){
       // 获取坐标值 , 给event对象扩展一个 points 属性
      e.points =  getPoint(e); 
      //  执行 msd 的调用 
     if(msd){  // 如果有 msd 就执行 msd 方法 
         msd.call(this, e); // this -> elem
     }
  });
  // mousemove
  elem.addEventListener('mousemove',function(e){
    e.points =  getPoint(e); 
    if(msm){ 
       msm.call(this, e);
    } 
  });  
  // mouseup
  elem.addEventListener('mouseup',function(e){
    e.points =  getPoint(e); 
    if(msu){ 
       msu.call(this, e); 
   } 
  }); 
};