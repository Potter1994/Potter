<?php
require_once('conn.php');
$sql = "INSERT INTO comment (member_id, username, context) VALUES ('$_COOKIE[PHPSESSID]' ,'$_POST[username]', '$_POST[content]')";
$conn -> query($sql);
if($conn){
    echo 'yes';
}
?>