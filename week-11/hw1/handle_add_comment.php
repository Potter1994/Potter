<?php
@session_start();
require_once('conn.php');
if($_SESSION['role'] == 0){
    die('你沒有權限新增留言');
}
$stmt = $conn->prepare("INSERT INTO `comment` (`username`, `member_id`, `content`) VALUES(?,?,?)");
$stmt->bind_param('sss', $username,$member_id, $content);
$member_id = "$_COOKIE[PHPSESSID]";
$username = "$_SESSION[login_username]";
// XSS 防範角括號以及，單引號及雙引號
$string = htmlspecialchars($_POST['content'], ENT_QUOTES);
$content = $string;
$stmt->execute();
if($stmt->affected_rows >= 1){
    echo 'yes';
}
?>