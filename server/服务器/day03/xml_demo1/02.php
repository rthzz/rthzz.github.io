<?php
   header('Content-type:text/xml;charset=utf-8');
   // 获取 hollywood.xmL数据 
   echo  file_get_contents('hollywood.xml');
?>