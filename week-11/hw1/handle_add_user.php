<?php
require_once('conn.php');
$stmt = $conn->prepare("INSERT INTO `user` (`id`, `username`, `password`) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $id, $username, $hash);
$id = $_COOKIE["PHPSESSID"];
$username = $_POST['username'];
$hash = password_hash("$_POST[password]",PASSWORD_DEFAULT);
$stmt->execute();
?>