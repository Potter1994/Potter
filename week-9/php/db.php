<?php
@session_start();
$_SESSION['link'] = mysqli_connect('localhost', 'root', 'sky831223', 'homework');
if($_SESSION['link']){
    mysqli_query($_SESSION['link'], "SET NAMES utf8");
}
else{
    echo "sql資料庫連接失敗: " . mysqli_connect_error();
}
?>