<?php

$username = $_POST["username"];
echo "姓名：".$username."<br/>";

$sex = $_POST["sex"];
echo "性別：".$sex."<br/>";


# checkbox 會轉為陣列
$transArr = $_POST["trans"];

echo "交通工具：";
foreach($transArr as $index => $value ){
    echo $value;
    echo ",";
}

//echo "交通工具：".join("/", $transArr)."<br/>";

?>