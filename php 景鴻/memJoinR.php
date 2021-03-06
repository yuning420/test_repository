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
  $account = $_POST["account"];
  $pwd = $_POST["pwd"];

  //建立SQL
  $sql = "INSERT INTO member(Name, PWD, CreateDate, LastLoginDate) VALUES (?, ?, NOW(), NOW())";

  $statement = $pdo->prepare($sql);
  $statement ->bindValue(1, $account);
  $statement ->bindValue(2, $pwd); 
  
  $statement->execute();

  header("Location: Select.php");


?>