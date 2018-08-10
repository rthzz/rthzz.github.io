<?php 
	$arr = array('a'=>'nidex');
	$arr['b'] = 'index11';
	print_r($arr); 

	// 准备一个数组 用来保存 多个用户名
	$userArr = array("葫芦兄弟","柯南","水冰月","钢铁侠");

	// 获取 提交过来的 用户名
	$postName = $_POST['user'];

	// 判断 是否存在于数组中
	/*
		参数1: 查询的内容
		参数2 数组
	*/
	$isIn = in_array($postName,$userArr);
	if($isIn){
		echo 1; //表示用户名已经有了！
	}else{
		echo 0;
	}
 ?>