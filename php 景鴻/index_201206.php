<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP</title>
</head>
<body>

<table>
<tr>
<td>

<?php
  // echo "hello everyone!";
  // Name = "王小明";
  // $When = "今天";
  // $Action = "走路";
  // $What = "上班";
  // echo $Name.$When.$Action.$What; //.字串相加中間空一格
  // $a = "123";
  // $b = 123;
  // echo $a.$b;

  echo 'He does not go to school.';
  echo "<br/>";
  echo "He doesn't go to school";
  echo "<br/>";
  echo 'He doesn\'t go to school';

  echo "<br/>";
  echo "<br/>";
  $a = "123";
  echo "<br/>";
  if(is_string($a)){
    echo 10*$a;
  }else{
    echo "a is not a number";
  };

  // echo "<br/>";
  // echo gettype(123);
  // echo "<br/>";
  // echo is_string("12345");  
  // echo "<br/>";
  // var_dump(3.1*2, true);

  echo "<br/>";
  echo '14*4='. 14*4;
  echo "<br/>";
  echo "14/4=". 14/4;
  echo "<br/>";
  echo "14%4=". 14%4;

  echo "<br/>";
  echo "<br/>";
  $myScore = 58;
  echo $myScore>=60 ? "及格" : "不及格";

?>

</td>
</tr>
</table>


</body>
</html>
