<?php
require_once('../conn.php');
require_once('../php/check_user_login.php');
$name = $user['username'];
$text = $_POST['context'];
$sql = "INSERT INTO `comment`(`username`, `context`) VALUES ('$name', '$text')";
$con -> query($sql);
print_r($con);
?>