<?php
require_once('conn.php');
require_once('check_admin.php');
$id = (int)$_GET['id'];
$result = $conn->query("DELETE FROM `article` WHERE `id` = $id");
if($result){
    echo 'yes';
}else{
    echo 'no';
}
?>