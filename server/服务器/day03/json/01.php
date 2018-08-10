<?php
   header('Content-type:text/html;charset=utf-8');
   // 获取 前端传来的 json 数据 
   $value = $_POST['user'];
   // 把 json 字符串 返回 到  前台
   echo  $value;     