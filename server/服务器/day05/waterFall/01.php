<?php
  header('Content-type:text/html;charset=utf-8');
  echo  file_get_contents('./info/data.json');
  
  
  // $data  是一个json字符串
  $data =  file_get_contents('./info/data.json'); 
  // json_decode() 将json转化成 php对象 
  $dataArr = json_decode($data); 
  // 从 $dataArr 中 随机抽出 10个对象,-> 10张图片
  // php提供的随机方法 -> array_rand(arr,n) n:个数
  // 返回值是: 随机元素对应的下标的数组.  
  $randArr = array_rand($dataArr,10);
  // 根据随机数下标数组去总数组 $dataArr 中获取随机元素
  $newArr = array(); 
  // 循环遍历 $randArr 
  for($i=0;$i<count($randArr);$i++){
      // 获取每一个随机下标 $randArr[$i]
      // 把 $randArr[$i] 当成 下标 去到 $dataArr 中取元素
      $randObj = $dataArr[ $randArr[$i] ];  
      // 把 $randObj 压入到 $newArr 中  
      array_push($newArr,$randObj); 
  };
  // 把 索引数组包装成关联数组  
  $hashArr = array('key'=>$newArr);
  // 转化为 json 格式 并且输出 
  echo json_encode($hashArr); 
  
