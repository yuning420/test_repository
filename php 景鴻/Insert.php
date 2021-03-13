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

  //建立SQL
  $sql = "INSERT INTO member(Name, PWD, CreateDate, LastLoginDate) VALUES ('王小明', 'select*from member where Name=''or1=1#'and PWD=''', NOW(), NOW())";

  //執行
  $pdo->exec($sql);


?>