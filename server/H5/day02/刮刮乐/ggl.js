/* 刮刮乐效果 - 面向对象 */
var ggl = {
  c1: null, // c1是获取的canvas元素
  ctx: null, // ctx是画布对象
  c1_width: 376,
  c1_height: 82,
  ismousedown: false, // 表示鼠标是否按下
  num: 1, // 刮奖的次数
  isOk: false, // 判断当前刮的程度,超过一半有效
  init: function () { // 初始化方法
    // 1. 获取canavs元素,进行赋值
    this.c1 = document.getElementById('canvas1');
    // 2. 获取画布对象, 进行赋值 
    this.ctx = this.c1.getContext('2d');
    // 3. 设置画布的 宽 高 
    this.c1.width = this.c1_width;
    this.c1.height = this.c1_height;
    // 4. 初始化 画布 
    this.initCanvas();
    // 5. 初始化 奖品
    this.initNum();
    // 6. 调用 eventMouse 中的 事件方法 
    mouseEvent.mouse(this.c1, this.mousedown, this.mousemove, this.mouseup);
  },
  initCanvas: function () {
    // 1. 设置图层的层叠关系, 默认的值 
    this.ctx.globalCompositeOperation = 'source-over';
    // 2. 设置绘制矩形的颜色 #797979
    this.ctx.fillStyle = '#797979';
    // 3. 绘制实心矩形 
    this.ctx.fillRect(0, 0, this.c1_width, this.c1_height);
    // 4. 设置文字的颜色 字体 30px 居中
    this.ctx.fillStyle = '#333';
    this.ctx.font = 'bold 30px Microsoft yahei';
    this.ctx.textAlign = 'center';
    // 5. 绘制文字内容 - 刮一刮
    this.ctx.fillText('刮一刮', this.c1_width / 2, this.c1_height / 2 + 10);
    // 6. 设置图层的层叠关系, - 新层图与原有图层重叠部分消失.
    this.ctx.globalCompositeOperation = 'destination-out';
  },
  mousedown: function (e) {
    e.preventDefault(); // 取消上一次事件
    // 1. 判断鼠标已按下
    ggl.ismousedown = true;
  },
  mousemove: function (e) {
    e.preventDefault();
    // 1. 判断鼠标是否已按下 
    if (!ggl.ismousedown) {
      return;
    };
    ggl.ctx.beginPath();
    // 不停的绘制圆  x,y轴的坐标
    var x = e.points.dx - document.getElementById('top').offsetLeft,
      y = e.points.dy - document.getElementById('top').offsetTop;
    ggl.ctx.arc(x, y, 10, 0, Math.PI * 2);
    ggl.ctx.closePath();
    ggl.ctx.fill(); // 开始绘制 
  },
  mouseup: function (e) {
    e.preventDefault();
    // 鼠标抬起, ismousedown 改为 false 
    ggl.ismousedown = false;
    // 实现 涂刮一半以上面积 才能点击,并且其余地方自动消除
    // getImageData 得到画布像素,根据画布像素来判断当前涂刮面积
    var data = ggl.ctx.getImageData(0,0,ggl.c1_width,ggl.c1_height);
    for(var i=0,j=0;i<data.data.length;i+=4){
        if(data.data[i]  === 0){
            j++;
        };
    };
    // data.data.length/4 得到整个画布像素, 一半就是在 /2.
    if(j > data.data.length/8){
        ggl.isOk = true;
        // 清除画布的其余部分
        ggl.ctx.clearRect(0,0,ggl.c1_width,ggl.c1_height);
      };
      if(ggl.isOk){
        // 改变 按钮的 z-index 值 
        $('.btn').css('z-index','3'); 
    }
  },
  initNum: function(){
    // 剩余的挂卡次数 
    $('.num1').html(3-ggl.num);
    // 使用随机数来制作抽奖概率
    var random = Math.floor(Math.random()* 100);
    // 初始化 isOk 
    ggl.isOk = false;
    // 控制中奖概率
    if(random < ggl.num*33){
        // 1. 显示中奖按钮 
        $('#prompt').html('恭喜你, 中奖了');
        $('#ok').css('display','block');
        // 2. 给按钮绑定事件 
        $('#ok').unbind('click');
        $('#ok').click(function(){
             alert('不好意思, 奖品领完了');
        });
    }else{
      $('#prompt').html('很遗憾,未中奖');
      $('#no').css('display','block');
      this.onceAgin();
    } 
  },
  onceAgin: function(){
    console.log(ggl.num);
    $('#no').unbind('click');
    // 没有中奖在来一次
    $('#no').click(function(){
         if(ggl.num >=3){
             alert('您的次数已用完!');
         }else{
            ggl.num++;
            console.log(ggl.num);
            // 初始化按钮 
            $('#ok').css('display','none');
            $('#no').css('display','none');
            $('.btn').css('z-index',1);
            // 调用初始化画布 
            ggl.initCanvas();
            ggl.initNum();
         }
    })
  }
};
// 当页面加载完成, 就执行 ggl 
window.onload = function () {
  ggl.init();
}