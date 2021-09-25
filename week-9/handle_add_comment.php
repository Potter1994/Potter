<?php
require_once('conn.php');
$nickname = $_POST["nickname"];
$content = $_POST["content"];
$sql = "INSERT INTO `comment`(`username`, `context`) VALUES ('$nickname', '$content')";
$query = $con -> query($sql);
if($query){
    echo "成功";
    header('Location: index.php');
    exit();
} else{
    var_dump($con);
}


?>