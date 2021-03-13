<?php

  include("../Conn_select.php");

    //建立SQL語法
  $sql = "SELECT * FROM topic";
  
  $statement = $pdo->prepare($sql);
  $statement ->execute();

  //抓出全部且依照順序封裝成一個二維陣列
	$data = $statement->fetchAll();

  //將二維陣列取出顯示其值
  // foreach($data as $index => $row){
	//   echo $row["ID"];   //欄位名稱
	//   echo " / ";
	//   echo $row["content"];    //欄位名稱
	//   echo " / ";
	//   echo $row["CreateDate"];    //欄位名稱
	//   echo " <br/> ";
  // }

?>

<html>

<style>
  *{
    font-family:Calibri; 
    text-decoration: none;
  }
  a{
    color:blue;
  }
</style>

<body>
  <a href="CreateTopic.php">新增話題</a>
  
  <table border="1">

  <tr>
    <td>編號</td>
    <td>主題</td>
    <td>時間</td>
  </tr>

  <?php 
    foreach($data as $index => $row){

  ?>

  <tr>
    <td><?=$row["ID"] ?></td>
    <!-- <td><?echo $row["ID"];?></td> -->
    <td> <a href="Reply.php?id=<?=$row["ID"]?>"><?=$row["content"] ?></a> </td>
    <td><?=$row["CreateDate"] ?></td>
  </tr>

  <?php 
  }
  ?> 
  <!-- 為了要讓程式能讀懂<td>裡的是html,所以不能包在<?php?>裡-->

  </table>
</body>
</html>