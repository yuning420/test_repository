<?php

  //三元運算子 的語法
  $topic = $_POST == null ? "": $_POST["topic"];

  // if($_POST !=""){}  同下的寫法,只是比較喜歡用if(){}else{}
  if($_POST == null){
    $topic = ""; //from新增話題
  }else{
    $topic = $_POST["topic"]; // post by itself

    include("../Conn_select.php");

    $sql = "INSERT INTO topic(Content, CreateDate) VALUES (?, NOW())";
  
    $statement = $pdo->prepare($sql);
    $statement ->bindValue(1, $topic);
    $statement ->execute(); //執行
  
    //跳轉到topic.php
    header("Location: Topic.php");
  
  }



?>

<html>
  <body>

    <!-- GET表單 -->
    <form method="POST" action="CreateTopic.php">

      主題:<input type="text" name="topic" /><br/>
      <br/>
      <input type="submit" value="送出" />

    </form>

  </body>
</html>