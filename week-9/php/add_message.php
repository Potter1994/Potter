<?php
require_once "db.php";
require_once "function.php";
$check = add_message($_POST['content']);
if($check == true){
    echo "yes";
}
else{
    echo "no";
}

?>