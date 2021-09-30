<?php
require_once('conn.php');
require_once('check_admin.php');

if(empty($_POST['title']) || empty($_POST['content'])){
    header('Location: edit.php');
    die();
}

if(isset($_POST['article_id'])){
    $stmt = $conn->prepare("UPDATE `article` SET `title` = ?, `content` = ? WHERE `id` = ?");
    $stmt->bind_param('ssi', $title, $content, $id);
    $title = $_POST['title'];
    $content = $_POST['content'];
    $id = $_POST['article_id'];
    $stmt->execute();
    if($stmt->affected_rows == 1){
        header('Location: admin.php');
    }else{
        die('fail');
    }
}
else{
    $stmt = $conn->prepare("INSERT INTO `article` (`title`, `content`) VALUES(?, ?)");
    $stmt->bind_param('ss', $title, $content);
    $title = $_POST['title'];
    $content = $_POST['content'];
    $stmt->execute();
    if($stmt->affected_rows == 1){
        header('Location: admin.php');
    }else{
        die('fail');
    }
}
?>