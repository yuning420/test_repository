<?php
  //資料庫連線
  include("../Conn_select.php");

    //建立SQL語法
  $id = $_GET["id"];
  //抓網址列的id
  
  $sql = "SELECT * FROM topic where ID =?";
  
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1,$id);
  $statement ->execute();

  //抓出全部且依照順序封裝成一個二維陣列
  $data = $statement->fetchAll();
  // ----------------------------------
  //撈reply的資料
  $sql = "SELECT * FROM reply where TID =?";
  
  $statement = $pdo->prepare($sql);
  $statement->bindValue(1,$id);
  $statement ->execute();

  //跟上面的data要不同名稱,才可以瘋裝成不同的陣列
  $dataReply = $statement->fetchAll();

?>

<html>
<style>
  *{
    font-family:Calibri; 
    text-decoration: none;
  }
  a{
    color:blue;
    margin-right:20px;
  }
</style>
<body>
  <a href="CreateReply.php?id=<?=$id?>">新增回覆</a>
  <a href="Topic.php">回首頁</a>
  
  <table border="1">

  <tr>
    <td>主題</td>
    <td>時間</td>
  </tr>

  <!-- 一樣是要跑迴圈顯示不同筆資料 -->
  <?php 
    foreach($data as $index => $row){

  ?>

  <tr>
    <td><?=$row["content"] ?></td>
    <td><?=$row["CreateDate"] ?></td>
  </tr>

  <?php 
    }
  ?> 
  </table>

  <br/>
  <br/>

  <table border="1">

    <tr>
      <td>回覆</td>
      <td>時間</td>
    </tr>

    <?php 
      foreach($dataReply as $index => $row){

    ?>

    <tr>
      <td><?=$row["Content"] ?></td>
      <td><?=$row["CreateDate"] ?></td>
    </tr>

    <?php 
      }
    ?> 


  </table>


  </table>
</body>
</html>