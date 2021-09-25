<?php
require_once('../conn.php');
$nickname = $_POST['nickname'];
$sql = "SELECT * FROM user WHERE username = '$nickname'";
$result = $con -> query($sql);
if($result -> num_rows > 0){
    echo 'yes';
} else{
    echo 'no';

}



?>