<?php
require_once('conn.php');
$stmt = $conn->prepare("SELECT * FROM `user` WHERE `username` = ?");
$stmt->bind_param('s', $username);
$username = $_POST['username'];
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows == 1){
    $data = $result->fetch_assoc();
    if(password_verify($_POST['password'], $data['password'])){
        $_SESSION['member_id'] = $data['id'];
        header("Location: admin.php");
    }
}else{
    die('fail');
    header('Location: index.php');
}
?>