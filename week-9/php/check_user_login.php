<?php
$member_id = $_COOKIE['PHPSESSID'];
$user = $con -> query("SELECT * FROM `user` WHERE `id` = '$member_id'");
if($user -> num_rows){
    $user = $user -> fetch_assoc();
  }else{
    header('Location: ../index.php');
  }
?>