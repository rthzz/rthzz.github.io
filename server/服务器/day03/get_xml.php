<?php
   // 读取XML 文档, 所有要设置头部信息 
   header('Content-type:text/xml;charset=utf-8');
   // 获取文档数据  
   // file_get_contents('url')
   echo  file_get_contents('01xml.xml');
?>