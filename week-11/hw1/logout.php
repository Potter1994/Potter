<?php
setcookie("PHPSESSID", '', time() - 3600, "/");
setcookie("PHPSESSID", '', time() - 3600, "/week15");
@session_start();
header('location: index.php');
?>