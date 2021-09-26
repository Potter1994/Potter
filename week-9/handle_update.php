<?php
require_once('conn.php');
$sql = "UPDATE `comment` SET `context` = '$_POST[content]' WHERE `id` = '$_GET[id]'";
$conn -> query($sql);
header('location: admin_index.php');
?>