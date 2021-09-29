<?php
require_once('conn.php');
$sql = "SELECT `username`,`password`,`id` FROM `user` WHERE `username` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $username);
$username = "$_POST[username]";
$stmt->execute();
$result = $stmt->get_result();


if(!isset($_POST['username']) || !isset($_POST['password']) || $_POST['username'] = '' || $_POST['password'] == ''){
    exit();
}  else if($result->num_rows == 1){
    $row = $result->fetch_assoc();
    if(password_verify("$_POST[password]", $row['password'])){
    setcookie('PHPSESSID', $row['id'], time() + 3600);
    echo 'yes';
    exit();
}
}
?>