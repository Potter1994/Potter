<!-- <?php
require_once('conn.php');
$stmt = $conn->prepare("INSERT INTO `user` (`id`, `username`, `password`) VALUES (? ,? ,?)");
$stmt->bind_param('sss', $id, $username, $password);
$id = $_COOKIE['PHPSESSID'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$stmt->execute();
if($stmt->affected_rows == 1){
    echo "創建成功";
}
?> -->