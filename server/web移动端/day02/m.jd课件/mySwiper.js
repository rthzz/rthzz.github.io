/*  m.jd 项目主要实现三个功能: 
      移动端轮播图:    mySlider
 */

// 练习 : 倒计时:  downTime
  //     滚动搜索区域透明度变化:  searchChange

/* 轮播图: 
    1. 自动轮播 ( 定时器+位移+过渡 ),  无缝衔接( 过渡结束+
    定位 ). 
    2. 点随之滚动 
    3. 实现移动端的 touch 事件.   
*/
// function mySlider() {
//   // 1. 获取 轮播图 盒子 
//   var jdBanner = document.querySelector('.jd_banner');
//   // 2. 获取 盒子的宽度 
//   var w = jdBanner.offsetWidth; // 可见宽度 
//   // 3. 分别获取 图片盒子 imageBox 和 点的盒子pointBox
//   var imageBox = jdBanner.children[0],
//     pointBox = jdBanner.children[1];
//   // 4. 获取所有的 点 
//   var points = pointBox.querySelectorAll("li");
//   // 5. 自动轮播  使用定时器 setInterval()  
//   var index = 1;
//   var timer = setInterval(function () {
//     index++;
//     // 调用 过渡 位移 方法 
//     addTransition(imageBox);
//     addTranslate(imageBox, -w * index);
//     // 点随之滚动起来 ( 改变当前点的class ) 
//     setPoint(points, index);
//     console.log(index);
//   }, 2000);
//   //  console.log(index);
//   // 绑定过渡结束事件 transitionEnd 
//   imageBox.addEventListener('webkitTransitionEnd', function () {
//     if (index >= 9) { // 轮播到最后一张
//       index = 1;
//       clearTransition(this); // 清除过渡
//       addTranslate(this, -w * index); // 重新定位到第一张
//     } else if (index <= 0) {
//       index = 8;
//       clearTransition(this); // 清除过渡
//       addTranslate(this, -w * index); // 重新定位到最后一张
//     };
//   });
//   // 实现了 touch 功能,可以手动控制轮播 
//   // 初始化 值
//   var startX = 0, // 记录起始触摸点的坐标 ( X轴 )
//     moveX = 0, // 滑动结束的 X 轴坐标
//     distanceX = 0, // 滑动的距离 moveX-startX
//     isMove = false; // 是否滑动过  
//   /* touchstart */
//   imageBox.addEventListener('touchstart', function (e) {
//     e.preventDefault();
//     startX = e.touches[0].clientX; // 当前屏幕x轴坐标
//     clearInterval(timer); // 暂定定时器
//   });
//   /* touchmove */
//   imageBox.addEventListener('touchmove', function (e) {
//     e.preventDefault();
//     isMove = true; // 表示当前已经滑动
//     moveX = e.touches[0].clientX; //滑动最后的X轴坐标
//     distanceX = moveX - startX; // 计算滑动的距离
//     clearTransition(this); // 清除过渡
//     // 调用位移方法  实时定位
//     addTranslate(this, -w * index + distanceX);
//   });
//   /* touchend */
//   imageBox.addEventListener('touchend', function (e) {
//     e.preventDefault();
//     /* 当滑动距离超过图片宽度的1/3时,滑动到上一张
//          或下一张, 否则, 需要吸附回去. 
//          Math.abs()  取决对值
//         */
//     if (isMove) { // 判断是否滑动过        
//       // 滑动距离 超过  图片宽度的1/3
//       if (Math.abs(distanceX) > w / 3) {
//         // 切换到 上一张 或 下一张 
//         if (distanceX > 0) { // 右滑 上一张
//           index--;
//         } else { // 左滑 下一张 
//           index++;
//         }
//         // 根据 index的变化去调用 位移和过渡
//         addTransition(this);
//         addTranslate(this, -w * index);
//         setPoint(points, index);
//       } else { // 滑动距离没有超过 w/3
//         // 吸附回去 
//         addTransition(this);
//         addTranslate(this, -w * index);
//       }
//     };
//     // 初始化参数, 防止对下一次滑动有影响 
//     startX = 0, moveX = 0, distanceX = 0, isMove = false;
//     // 再起启动定时器 timer 
//     timer = setInterval(function () {
//       index++;
//       addTransition(imageBox);
//       addTranslate(imageBox, -w * index);
//     }, 2000);
//   });
// };
// /* 5. 公共方法 */
// /* 过渡方法 */
// function addTransition(elem) {
//   elem.style.transition = 'all 0.3s ease';
//   elem.style.webkitTransition = "all 0.3s ease";
// };
// /* 清除过渡方法 */
// function clearTransition(elem) {
//   elem.style.transition = 'none';
//   elem.style.webkitTransition = "none";
// };
// /* 位移方法 */
// function addTranslate(elem, x) { // x 是位移的距离 
//   elem.style.transform = "translateX(" + x + "px)";
//   elem.style.webkitTransform = "translateX(" + x + "px)";
// }                                                                                                                                                                                                                                                 
// /* 改变点的class */
// function setPoint(points, index) {
//   // 清除上一次点 的 class 
//   for (var i = 0; i < points.length; i++) {
//     points[i].className = '';
//   };
//   /* 设置变量 n. n的值分为三种情况
//       1. index = 9; 就是最后一张向第一张图过渡 
//           n = 9; 
//       2. index = 0; 第一张图向最后一张过渡
//               n =  7;
//       3. n = 1;
//   */
//   index == 9 ? n = 9 : index == 0 ? n = 7 : n = 1;
//   points[Math.abs(index - n)].className = 'now';
// }


/* 轮播图的封装 */
var mySlider = {
  jdBbanner: null,
  w: null,
  imageBox: null,
  pointBox: null,
  points: null,
  index: 1,
  startX: 0,
  moveX: 0,
  distanceX: 0,
  isMove: false,
  timer: null,
  initSlider: function () {
    // 1. 获取 轮播图 盒子 
    this.jdBanner = document.querySelector('.jd_banner');
    // 2. 获取 盒子的宽度 
    this.w = this.jdBanner.offsetWidth; // 可见宽度 
    // 3. 分别获取 图片盒子 imageBox 和 点的盒子pointBox
    this.imageBox = this.jdBanner.children[0], this.pointBox = this.jdBanner.children[1];
    // 4. 获取所有的 点 
    this.points = this.pointBox.querySelectorAll("li");
    this.setTimer();
    // 留住 this 
    var self = this;
    /* 判断页面可见性事件  visibilitychange   */
    document.addEventListener("visibilitychange",function(){
       // 判断页面可见性 
       if(document.hidden){
           // 清除定时器
           clearInterval(self.timer);
           self.timer = null;
       }else{
           // 否则, 继续轮播 
           self.setTimer(); 
       }
    });
    // 绑定过渡结束事件 transitionEnd 
    this.imageBox.addEventListener('webkitTransitionEnd', function () {
      if (self.index >= 9) { // 轮播到最后一张
        self.index = 1;
        self.clearTransition(); // 清除过渡
        self.addTranslate(-self.index * self.w); // 重新定位到第一张
      } else if (self.index <= 0) {
        self.index = 8;
        self.clearTransition(); // 清除过渡
        self.addTranslate(-self.index * self.w); // 重新定位到最后一张
      };
    });
    /* touchstart */
    this.imageBox.addEventListener('touchstart', function (e) {
      e.preventDefault();
      self.startX = e.touches[0].clientX; // 当前屏幕x轴坐标
      clearInterval(self.timer); // 暂定定时器
    });
    /* touchmove */
    this.imageBox.addEventListener('touchmove', function (e) {
      e.preventDefault();
      self.isMove = true; // 表示当前已经滑动
      self.moveX = e.touches[0].clientX; //滑动最后的X轴坐标
      self.distanceX = self.moveX - self.startX; // 计算滑动的距离
      self.clearTransition(); // 清除过渡
      // 调用位移方法  实时定位
      self.addTranslate(-self.w * self.index + self.distanceX);
    });
    /* touchend */
    this.imageBox.addEventListener('touchend', function (e) {
      e.preventDefault();
      if (self.isMove) { // 判断是否滑动过        
        // 滑动距离 超过  图片宽度的1/3
        if (Math.abs(self.distanceX) > self.w / 3) {
          // 切换到 上一张 或 下一张 
          if (self.distanceX > 0) { // 右滑 上一张
            self.index--;
          } else { // 左滑 下一张 
            self.index++;
          }
          // 根据 index的变化去调用 位移和过渡
          self.addTransition();
          self.addTranslate(-self.w * self.index);
          self.setPoint();
        } else { // 滑动距离没有超过 w/3
          // 吸附回去 
          self.addTransition();
          self.addTranslate(-self.w * self.index);
        }
      };
      // 初始化参数, 防止对下一次滑动有影响 
      self.startX = 0, self.moveX = 0, self.distanceX = 0, self.isMove = false;
      // 再起启动定时器 timer 
      clearInterval(self.timer);
      self.timer = null;
      self.setTimer();
    });
  },
  // 封装定时器
  setTimer: function () {
    var self = this; //  this ->  mySlider 
    this.timer = setInterval(function () {
      self.index++;
      // 调用 过渡 位移 方法 
      self.addTransition();
      self.addTranslate(-self.index * self.w);
      // 点随之滚动起来 ( 改变当前点的class ) 
      self.setPoint();
    }, 2000)
  },
  addTransition: function () {
    this.imageBox.style.transition = 'all 0.3s ease';
    this.imageBox.webkitTransition = "all 0.3s ease";
  },
  addTranslate: function (x) {
    this.imageBox.style.transform = "translateX(" + x + "px)";
    this.imageBox.style.webkitTransform = "translateX(" + x + "px)";
  },
  clearTransition: function () {
    this.imageBox.style.transition = 'none';
    this.imageBox.style.webkitTransition = "none";
  },
  setPoint: function () {
    // 清除上一次点 的 class 
    for (var i = 0; i < this.points.length; i++) {
      this.points[i].className = '';
    };
    this.index == 9 ? n = 9 : this.index == 0 ? n = 7 : n = 1;
    this.points[Math.abs(this.index - n)].className = 'now';
  }
};

window.onload = function () {
  mySlider.initSlider();
};