<?php
  /* 设置 setCookie() */
  // 1. 设置 $name $value 
  setCookie("username01","小明");
  // 2. 设置 $expires  过期时间  单位是 S . 
  setCookie("test01","xiaoming",time()+3600);

  // 3. 设置 $path 不设置,就是当前目录, 设置 '/', 根目录下有效
  //     /setCookie/01.php
  // 路径 $path 不一样, 就是不同的cookie . 
  setCookie('test02','path',time()+3600,'/');
  setCookie('test03','path02',time()+3600,'/server'); 

  // 4. $domain   
  setCookie('testDomain','domain',time()+3600,'','127.0.0.1:5500'); 

  // 5. $secure  值为 true Https下设置设置成功
  setCookie('testSecure','secure',time()+60,'','',true); 

  // 6. $HttpOnly 值为 true, 禁止 JS去获取cookie. 
  setCookie('testHttp','HttpOnly',time()+3600,'','',false,true); 

  // 7. 删除 cookie , 设置它的有效时间  $expires 