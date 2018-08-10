<?php
   header('Content-type:text/html;charset=utf-8');
   // 1. 获取用户名  $_GET
   $user =  $_GET['user'];
   // 2. 用数组来模拟一组用户名数据 
   $userName = array('jack','rose','lilei','hanmeimei');
   // 3. php提供了一个 验证数组值的API  
   //    in_array(val,arr);  返回值的 boolean 
   $result = in_array($user,$userName); 
   // 4. 判断 $result 的值 
   if($result){
      echo 1; 
   }else{
      echo 0;
   }