<?php
 header('Content-type:text/html;charset=utf-8');
 // $_GET['callback'] 拿到回调函数,然后拼接一个参数返回到前台 
 echo $_GET['callback'].'({"name":"小明"})';