<?php?
header('Content-type:text/html;charset=utf-8')
//获取前台传来的数据
$value=$_POST['user'];
//把json字符串返回到前台
echo $value;
>