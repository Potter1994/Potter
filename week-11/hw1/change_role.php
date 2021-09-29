<?php
@session_start();
require_once('conn.php');
if(empty($_SESSION['role']) || $_SESSION['role'] != 2){
    header('Location: index.php');
    die('No');
}

if(!isset($_POST['identity'])){
    header('Location: manager.php');
    exit();
}


$stmt = $conn->prepare("UPDATE `user` SET `role` = ? WHERE `username` = ?");
$stmt->bind_param('is', $role, $username);
$role = $_POST['identity'];
$username = $_POST['username'];
$stmt->execute();
print_r($_POST['username']);
?>