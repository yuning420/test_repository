<?php

$username = $_GET["username"];
echo "姓名：".$username."<br/>";

$sex = $_GET["sex"];
echo "性別：".$sex."<br/>";


# checkbox 會轉為陣列
$transArr = $_GET["trans"];

echo "交通工具：";
foreach($transArr as $index => $value ){
    echo $value;
    echo ",<br/>";
}
//echo "交通工具：".join("/", $transArr)."<br/>";

$heightArr = [
	$_GET["height"][0],
	$_GET["height"][1],
	$_GET["height"][2]
];
// foreach($transArr as $index2 => $value2){
// 	array_push($heightArr, $_GET["height"]);
// }

echo "最高的".max($heightArr);
echo "</br>";
echo "平均身高".array_sum($heightArr)/ count($heightArr);


?>