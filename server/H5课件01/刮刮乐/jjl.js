// 面向对象
var ggl={
 c1:null,//c1是获取的canvas元素
 ctx:null,//ctx是画布对象
 c1_width:376,//画布的宽度
 c1_height:32,
 ismousedown,//鼠标是否按下
 num:1,//刮奖次数
 isOk:false,//判断当前刮的程度,超过一半有效
 init:function() {//初始化方法
    //获取canvasys,进行赋值
    this.c1=document.getElementById('canvas');
    //获取画布对象,进行赋值
    this.ctx=this.c1.getContext('2d');
    //设置画布的宽高
    this.c1.width=this.c1_width
    this.c1.height=this.c1_height

    //4初始化画布
    this.initCanvas
    //初始化奖品
    //调用eventMouse的事件方法
     
 },
 initCanvas:function(){
     //设置图层的层叠关系
     this.ctx.globalCompositeOperayion='source-over'
     //设置绘制矩形的颜色
     this.ctx.fillStyle='#797979',
     //绘制实心矩形
     this.ctx.fillRect(0,0,this.c1_width,this.c1_height)
     //绘制文字颜色 字体
     this.ctx.font='blod 30px Microsoft yahei'
     //绘制文字内容 刮一刮
     this.ctx.fillText('刮一刮',this.c1_width/2,this.c1_height/2+10)
     //设置图层的层叠关系 新图层与原有图层层叠部分消失 
    this.ctx.globalCompositeOperayion='destination '
 }

//将实先data.data.length


};
window.onload=function(){
    ggl.init();
};