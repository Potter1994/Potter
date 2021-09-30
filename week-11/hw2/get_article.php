<?php
require_once('conn.php');
$result = $conn->query("SELECT `content`, `id`,`title`,`create_date` FROM `article` ORDER BY `create_date` DESC LIMIT 5");
$datas = array();
if($result->num_rows){
  while($row = $result->fetch_assoc()){
    $datas[] = $row;
  }
}
?>