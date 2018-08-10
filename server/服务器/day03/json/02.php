<?php
   header('Content-type:text/html;charset=utf-8');
   // 读取 json 文件 并输出 
   echo file_get_contents('cities.json');