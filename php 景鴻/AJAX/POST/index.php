<?php
	$data= [];
	
	//判斷是否有POST
	if(isset($_POST["Name"])){
		$Name = $_POST["Name"];

		//資料庫連線資訊(用之前連線過的檔案)
		include('../../Conn_select.php');

		//SQL語法
		$sql = "SELECT * FROM member WHERE Name like ?";
		$statement = $pdo ->prepare($sql);
		$statement -> bindValue(1, "%".$Name."%"); //模糊搜尋
		$statement -> execute();

		//抓出全部並依照順序封裝成一個二維陣列
		$data = $statement->fetchAll();

	}

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script>
		function doQuery (){
			fm.submit();
		}
	</script>
</head>
<body>

	<h3>傳統GET/POST方式 - 連線PDO練習的Table: member</h3>
	<form name="fm" method="POST" action="index.php"> 
	姓名關鍵字: <input name="Name" type="text" onkeyup="doQuery()"/>
	<!-- <input type="submit" value="查詢"/> -->
	</form>
	<p>結果: <br>
<?php
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
  
?>
</p> 

</body>
</html>