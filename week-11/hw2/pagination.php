<?php
require_once('conn.php');

$result = $conn->query("SELECT COUNT(*) FROM `article`");
$row = $result->fetch_all(MYSQLI_ASSOC);

$total = $row[0]['COUNT(*)'];
$limit = 4;
$sum_page = ceil($total / $limit);
(!isset($_GET['p'])) ? $page = 1 : $page = $_GET['p'];


$offset = ($page - 1) * $limit;


$sql = "SELECT * FROM `article` LIMIT $offset,$limit";
$result = $conn->query($sql);
$rows = $result->fetch_all(MYSQLI_ASSOC);
// if($rows){
//     foreach($rows as $row){
//       echo "<p>". $row['id'] . ' ' . htmlspecialchars($row['title']) . '<br></p>';      
//     }
// }

$result -> free_result();
$conn -> close();
?>


<!-- <p>
    <a href="?p=<?php echo ($page > 1)? ($page-1) : $page?>">上一頁</a>
<?php
for($p = 1; $p <= $sum_page; $p++){
    echo '<a href=?p='."{$p}".'>'.$p.'</a>'. '<span> </span>';
}
?>
    <a href="?p=<?php echo ($page < $sum_page) ? ($page+1) : $page?>">下一頁</a>
</p> -->