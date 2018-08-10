<?php
   // 在php中设置响应头部信息 
   header('Content-type:text/html;charset=utf-8');
   // 设置头部信息 - 允许所有源 跨域请求 
   header('Access-Control-Allow-Origin : * ');
   header("Access-Control-Allow-Headers : X-Requested-With");
   // 请求的数据 
   echo  '{ "name":"小明","age": 20 }'; 