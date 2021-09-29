<?php
require_once('conn.php');
$sql = "SELECT * FROM `user` WHERE `username` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $username);
$username = "$_POST[username]";
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows == 1){
    echo 'yes';
}else{
    echo 'no';
}
?>