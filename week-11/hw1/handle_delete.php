<?php
@session_start();
require_once('conn.php');
if(empty($_GET['id']) || empty($_COOKIE['PHPSESSID'])){
    die('empty data');
}
if($_SESSION['role'] == 2){
    $stmt = $conn->prepare("DELETE FROM `comment` WHERE `id` = ?");
$stmt->bind_param('s', $id);
$id = $_GET['id'];
$stmt->execute();
if($stmt->affected_rows == 1){
    echo 'yes';
}else{
    echo '請不要亂刪別人的留言';
}
}
else{
$stmt = $conn->prepare("DELETE FROM `comment` WHERE `id` = ? AND `member_id` = ?");
$stmt->bind_param('ss', $id, $member_id);
$id = $_GET['id'];
$member_id = $_COOKIE['PHPSESSID'];
$stmt->execute();
if($stmt->affected_rows == 1){
    echo 'yes';
}else{
    echo '請不要亂刪別人的留言';
}}
?>