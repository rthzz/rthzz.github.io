<?php
/*  PHP 的基础语法 
    1. PHP的文件声明  <?php ... ?>
    2. php中的注释有三种 
*/
    /* 多行注释 */      //  #  单行注释     

// 设置 头部信息  - 编码格式 
  // php直接提供了一个方法 header() 
  header('Content-type:text/html;charset=utf-8');
  
# 3. php的变量的使用规则  
  # 变量声明使用  $ ,  $a 后面是变量名
  # 变量必须以字母下划线开头,不能以数字开头 
  # 变量名只能包含字母数字和下划线 (0-9,a-z, _ )
 $str = '01.php';   
 $_str = '02.php';
//  $123 = '03.php'; 错误 

// 4. PHP 的数据类型 
 // 字符串  整数  浮点数 布尔 数组 对象 null resource(资源类型)
 // PHP是一门弱类型语言, 和 JS 一样.
 var_dump($str); // 打印内容 
 $str1 = null;
 var_dump($str1); 

// 5. 变量的传递方式 
 // 1. 值传递 
    $v1  = 1;
    $v2 = $v1;
    $v1 = 10; 
    var_dump($v2); // 1 
 // 2. 引用传递  
    $m1 = 2;
    $m2 = & $m1; 
    // 在php中 '&' 符号可以实现变量的引用传值方式
    $m1 = 20;
    var_dump($m2); 

 // 3. 可变变量    
  $s1  = 'abc';
  $abc = 30;
  var_dump($$s1); // 30 

// 6.  字符串使用规则  
   // 单引号 :  ''  内部的内容只是作为字符串 
   // 双引号 :  "" 内部的内容是变量,那么会解析该变量
   $str2 = 'hello';
   var_dump('$str2');  //  'str2'
   var_dump("$str2"); //  'hello' 

  // php 中字符串的拼接 用 . (点) 来拼接.
  $name = '静静';
  $xm = '小明';
  $str3 = $xm.'miss'.$name;
  var_dump($str3);    

// 7.  php中可以输入 HTML 
  echo  '<input type="text" value="请输入">';
  echo  '<ul>';
  echo  '<li>这是第一个li </li>';
  echo  '<li>这是第二个li </li>';
  echo  '</ul>';

// 8.  php中的运算符 
      $x = 10;
      $y = 20.01;
      var_dump( $x * $y );// 200   

// 9.  php中常量的定义  
    // 第一参数 常量名 , 第二参数 常量值    
     define('PI',3.14159);
     var_dump(PI);
     // PI = 4;  常量不能重新赋值

// 10. PHP 中数组的定义  array() 
  // 1. 索引数组定义 
       $arr1 = array('张无忌','周芷若','赵敏','小昭');
       var_dump($arr1);
       echo  $arr1[0];
       // 获取数组长度  count() 
       echo  count($arr1);
       // 遍历数组  for循环 
       for($i =0; $i<count($arr1);$i++){
           var_dump($arr1[$i]);
       };
       // 追加  array_push(arr,value); 
       array_push($arr1, '金毛狮王');
       var_dump($arr1);
  // 2. 关联数组定义 
  /* array(
         key1 => 值1,
         key2 => 值2
      )
  */ 
  $arr2 = array('name1'=>'张无忌','name2'=>'赵敏');
  var_dump($arr2);
  // 关联数组添加值 
  $arr2['name3'] = '张三丰';
  var_dump($arr2); 
  // 遍历 关联数组  foreach(arr as $key=>$value) 
  foreach($arr2 as $key=>$value ){
      echo $key ."=>".$value.'<br>';
  };

// 11. php中的内容输出  
 /*  echo : php语句直接一个值
      print_r() :  输出复杂类型: 数组, 对象 
      var_dump():  数组,对象. 输出详细信息.
 */ 

// 12. php中的函数  function
  //1. 函数名应该提示出它的功能
  //2. 函数名以字母或下划线开头
  //3. 函数名对大小写不敏感. 
  function sayName($name){
        echo '大家好, 我是 '.$name;
  };
  sayName('渣渣辉'); 

  // 参数有默认值的函数
  function sum($a, $b=3){
      return $a + $b;
  };
  echo  sum(2,10); 


// 13. 超全局变量 
/* PHP中预定义了几个超全局变量. 
   $_GET  $_POST  $_FILE  
   $_GET  $_POST他们用于收集表单数据
   form 属性  method = 'get/post' 
                    action = 'url'; 
*/

