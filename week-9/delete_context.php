<?php
require_once('conn.php');
$sql = "DELETE FROM `comment` WHERE `id` = $_GET[id]";
$conn->query($sql);
header('Location: edmit_context.php');

?>