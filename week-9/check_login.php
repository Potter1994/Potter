<?php
require_once('conn.php');
$sql = "SELECT * FROM `user` WHERE `username` = '$_POST[name]' AND `password` = '$_POST[pwd]'";
$result = $conn -> query($sql);
$row = $result -> fetch_assoc();
$value = $row['id'];
if($conn -> affected_rows == 1){
    setcookie("PHPSESSID", $value);
    echo 'true';
}
?>