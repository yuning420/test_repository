<?php

  // echo "hi";
  // echo "<br/>";

  $word = $_GET["word"];

  function sayHi($word){
    // echo "wow  ";
    return "Hello~".$word;

  }

  echo sayHi($word);



?>