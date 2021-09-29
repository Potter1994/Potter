<?php
require_once('conn.php');
if(isset($_COOKIE['PHPSESSID'])){
$stmt = $conn->prepare("SELECT `id` FROM `user` WHERE `id` = ?");
$stmt->bind_param('s', $member_id);
$member_id = $_COOKIE['PHPSESSID'];
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows == 1){
    header('Location: admin_index.php');
}}
?>