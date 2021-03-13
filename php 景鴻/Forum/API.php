<?php

  include("../Conn_select.php");

    //建立SQL語法
  $sql = "SELECT * FROM topic";
  
  $statement = $pdo->prepare($sql);
  $statement ->execute();

  //抓出全部且依照順序封裝成一個二維陣列
	$data = $statement->fetchAll();

  echo  "<table border="."1".">";

  echo "<tr>
          <td>編號</td>
          <td>主題</td>
          <td>時間</td>
        </tr>";

  foreach($data as $index => $row){
    echo "<tr>";
    echo "<td>".$row["ID"]."</td>";
    echo "<td><a href='Reply.php?id=".$row['ID']."'>".$row["content"]."</a> </td>";
    echo "<td>".$row["CreateDate"]."</td>";
    echo "</tr>";
  }
  echo "</table>";


?>