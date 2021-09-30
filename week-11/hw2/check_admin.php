<?php
require_once('conn.php');
$stmt = $conn->prepare("SELECT * FROM `user` WHERE `id` = ?");
$stmt->bind_param('s', $id);
$id = $_SESSION['member_id'];
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows == 1){
  $user = $result->fetch_assoc();
} else{
  header('Location: index.php');
  die();
}
?>