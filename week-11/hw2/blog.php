<?php
require_once('conn.php');
if(isset($_GET['id'])){
$id = $_GET['id'];
$data = $conn->query("SELECT * FROM `article` WHERE `id` = $id")->fetch_all(MYSQLI_ASSOC);
}
?>
<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'>Who's Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="article_list.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.html">管理後台</a></li>
          <li><a href="#">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>
  
  <?php include_once('banner.php');?>

  <div class="container-wrapper">
    <div class="posts">
      <article class="post">
        <div class="post__header">
          <div>標題 : <?php echo htmlspecialchars($data[0]['title'], ENT_QUOTES);?></div>
          <div class="post__actions">
            <a class="post__action" href="edit.php?id=<?php echo $data[0]['id']?>">編輯</a>
          </div>
        </div>
        <div class="post__info">
        <?php echo $data[0]['create_date']?>
        </div>
        <div class="post__content">
          <?php echo htmlspecialchars($data[0]['content'], ENT_QUOTES);?>
        </div>
      </article>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>