<?php

  include("../Conn_select.php");

    //建立SQL語法
  $sql = "SELECT * FROM topic";
  
  $statement = $pdo->prepare($sql);
  $statement ->execute();

  //抓出全部且依照順序封裝成一個二維陣列
	$data = $statement->fetchAll();

  echo json_encode($data)



?>