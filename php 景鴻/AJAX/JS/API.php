<?php
	$Name = $_POST["Name"];
	
	if($Name== ""){
		echo "請輸入查詢關鍵字";
	}else{
		//資料庫連線資訊(用之前連線過的檔案)
		include('../../Conn_select.php');

		//SQL語法
		$sql = "SELECT * FROM member WHERE Name like ?";
		$statement = $pdo ->prepare($sql);
		$statement -> bindValue(1, "%".$Name."%"); //模糊搜尋
		$statement -> execute();

		//抓出全部並依照順序封裝成一個二維陣列
		$data = $statement->fetchAll();

		if(count($data) > 0){
			foreach($data as $index => $row){
				echo $row["Name"];
				echo "/";
				echo $row["PWD"];
				echo "/";
				echo $row["CreateDate"];
				echo "/";
				echo $row["LastLoginDate"];
				echo "<br/>";
			}
		}else{
			echo "無此資料";
		}
	}

  


  
?>