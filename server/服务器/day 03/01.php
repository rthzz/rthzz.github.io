<?php
header('Content-type:text/html;charset=utf-8')
//1.获取用户名 $_GET
$user=$_GET['user'];

//2.准备用数组来模拟一组用户名数据
$username=array['jack','rose','lilei','hanmeimei'];

//3.php提供了一个验证数组值的api   in_arry(val,arr);返回的值为boolean

$result=in_array($user,$username);

//4 判断result的值
if($result){
    echo 1;
    }else{
    echo 0;
}

?>