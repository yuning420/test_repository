<?php

 //MySQL相關資訊
  $db_host = "localhost";
  $db_user = "root";
  $db_pass = "password";
  $db_select = "pdo";

  //建立資料庫連線物件
  $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

  //建立PDO物件，並放入指定的相關資料
  $pdo = new PDO($dsn, $db_user, $db_pass);

  //---------------------------------------------------

// include("Conn_select.php");

	// $account = $_POST["account"];
	// $pwd = $_POST["pwd"];


  //建立SQL語法
	$sql = "SELECT * FROM member";
  // $sql = "select * from member where Name = '".$account."' and pwd = '".$pwd."' ";
  // 1
  // $sql = "select * from member where Name = :name and PWD = :pwd";
  // 2
  // $sql = "select * from member where Name = ? and PWD = ?";
  // 3 bindParam
  // $sql = "select * from member where Name = :name and PWD = :pwd";
  // 4
  // $sql = "select * from member where Name = ? and PWD = ?";

  // $statement = $pdo->query($sql);
  $statement = $pdo->prepare($sql); //prepare可以防SQL隱碼攻擊
  // 1
  // $statement ->bindValue(":pwd", $pwd);
  // $statement ->bindValue(":name", $account);  
  // 2
  // $statement ->bindValue(1, $account);
  // $statement ->bindValue(2, $pwd);

  // 3 bindParam
  // $statement ->bindParam(":name", $account);
  // $statement ->bindParam(":pwd", $pwd);
  // 4
  // $statement ->bindParam(1, $account);
  // $statement ->bindParam(2, $pwd);




  //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
  // $statement = $pdo->query($sql);
  $statement ->execute();

  //抓出全部且依照順序封裝成一個二維陣列
	$data = $statement->fetchAll();
	// print_r($data);

  //將二維陣列取出顯示其值
  foreach($data as $index => $row){
	  echo $row["Name"];   //欄位名稱
	  echo " / ";
	  echo $row["PWD"];    //欄位名稱
	  echo " / ";
	  echo $row["CreateDate"];    //欄位名稱
	  echo " / ";
	  echo $row["LastLoginDate"]; //欄位名稱
	  echo "<br/>";
  }

?>