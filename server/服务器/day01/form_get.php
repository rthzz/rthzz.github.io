<?php
  header('Content-type:text/html;charset=utf-8');
  // 使用超全局变量 $_GET来接收前端form数据
  $name =  $_GET['user'];
  $pwd = $_GET['pwd']; 
  echo  "用户名: ".$name.', 密码: '.$pwd;
 
 ?>