<?php
    include("../Lib/UtilClass.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "SELECT * FROM ec_members WHERE Type = 0 and Account = ? and PWD = ?";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $products = $statement->fetchAll();

    //依資料筆數判斷是否為會員
    if(count($products) > 0){

        include("../Lib/MemberClass.php");
        $Member = new MemberClass();

        //將登入資訊寫入session
        $Member->setSessionB($_POST["account"]);

        //導回後台首頁        
        header("Location: Category.php");
    }else{
        //跳出提示停留在後台登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = 'Login.php';</script>"; 
    }
?>