<?php
require_once('conn.php');
$id = $_COOKIE['PHPSESSID'];
$username = $_POST['nickname'];
$password = $_POST['password'];
$sql = "INSERT INTO `user`(`id`, `username`, `password`) VALUES ('$id', '$username', '$password')";
$result = $conn -> query($sql);
if($conn -> affected_rows >= 1){
    header('Location: admin_index.php');
    exit();
}else{
echo 'sql語法錯誤' . $conn -> error;
    header('Location: index.php');
}
?>