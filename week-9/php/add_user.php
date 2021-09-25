<?php
require_once('../conn.php');
$nickname = $_POST['nickname'];
$password = $_POST['password'];
$member_id = $_COOKIE['PHPSESSID'];
$sql = "INSERT INTO user(`id`, `username`, `password`) VALUES ('$member_id', '$nickname', '$password')";
if($password && $nickname && $member_id){

$con -> query($sql);
if($con -> affected_rows >= 1){
    echo 'yes';
}
else{
    echo 'no';
}
}

?>