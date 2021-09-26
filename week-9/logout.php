<?php
unset($_COOKIE['PHPSESSID']);
@session_start();
header('Location: index.php');
?>