<html>
  <body>

    <!-- GET表單 -->
    <form method="get" action="Get.php">

    <!-- POST表單 -->
    <!--<form method="post" action="Post.php">-->

      姓名：<input type="text" name="username" /><br />
      性別：
        <input type="radio" name="sex" value="男" /> 男
        <input type="radio" name="sex" value="女" /> 女<br />
      交通工具：
        <!-- checkbox(複選)的name屬性需定義為陣列型態 -->
        <input type="checkbox" name="trans[]" value="汽車"/> 汽車
        <input type="checkbox" name="trans[]" value="機車"/> 機車<br />

        <br/>
        <br/>
        A身高:<input type="text" name="height[]" /><br/>
        B身高:<input type="text" name="height[]" /><br/>
        C身高:<input type="text" name="height[]" /><br/>


      <input type="submit" value="送出" />


    </form>

  </body>
</html>