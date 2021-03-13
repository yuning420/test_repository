<?php

  $tid = $_POST == null ? "": $_POST["tid"];
  // $reply = $_POST == null ? "": $_POST["reply"];

  // if($_POST !=""){}  同下的寫法,只是比較喜歡用if(){}else{}
  if($_POST == null){ //如果沒有輸入東西,就沒反應
    $reply = ""; //from新增話題
  }else{
    $reply = $_POST["reply"]; // post by itself
  
    include("../Conn_select.php");
  
    $sql = "INSERT INTO reply(TID, Content, CreateDate) VALUES (?, ?, NOW())";
    
    $statement = $pdo->prepare($sql);
    $statement ->bindValue(1, $tid);
    $statement ->bindValue(2, $reply);
    $statement ->execute(); //執行
    
    //跳轉到topic.php
    header("Location: Reply.php?id=".$tid);
    
  }
  
?>

<html>
  <body>

    <!-- GET表單 -->
    <form method="POST" action="CreateReply.php">
    <!-- post給自己=>顯示在同一頁上 -->
      <input type="hidden" name="tid" value="<?=$_GET["id"] ?>" />
      回覆:<input type="text" name="reply" /><br/>
      <br/>
      <input type="submit" value="送出" />

    </form>

  </body>
</html>