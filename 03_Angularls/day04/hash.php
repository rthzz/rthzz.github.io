<?php 

	$param = $_GET["hash"];
	// echo $param;
	switch($param){
		case "a":echo "<h1>一级标题</h1><p>随便写点</p>";break;
		case "b":echo "这是锚点b";break;
		case "c":echo "这是锚点c";break;
	}

 ?>