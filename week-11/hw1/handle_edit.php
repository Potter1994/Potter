<?php
@session_start();
require_once('conn.php');
if(empty($_POST['id']) || empty($_COOKIE['PHPSESSID'])){
    die('empty data');
}
if($_SESSION['role'] == 2)
{
    $stmt = $conn->prepare("UPDATE `comment` SET `content` = ? WHERE `id` = ?");
    $stmt->bind_param('si', $content, $id);
    $content = $_POST['content'];
    $id = $_POST['id'];
    $stmt->execute();
    if($stmt->affected_rows == 1){
        header("Location: admin_edit2.php");
    }else{
        die('fail');
    }
}
else if($_SESSION['role'] == 1)
{
    $stmt = $conn->prepare("UPDATE `comment` SET `content` = ? WHERE `id` = ? AND `member_id` = ?");
    $stmt->bind_param('sis', $content, $id, $member_id);
    $content = $_POST['content'];
    $id = $_POST['id'];
    $member_id = $_COOKIE['PHPSESSID'];
    $stmt->execute();
    if($stmt->affected_rows == 1){
        header("Location: admin_edit1.php");
    }else{
        die('fail');
    }
}
else{
    die('你沒有權限');
}

?>