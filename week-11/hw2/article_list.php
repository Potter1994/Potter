<?php
require_once('conn.php');
$datas = $conn->query("SELECT * FROM `article` ORDER BY `create_date` DESC")->fetch_all(MYSQLI_ASSOC);
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
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="login.php">登入</a></li>
        </div>
      </ul>
    </div>
  </nav>
  
  <?php include_once('banner.php');?>

  <div class="container-wrapper">
    <div class="posts">
      <?php if(isset($datas)):?>
        <?php foreach($datas as $data):?>
      <article class="post">
        <div class="post__header">
          <div><?php echo htmlspecialchars($data['title'], ENT_QUOTES)?></div>
          <div class="post__actions">
            <a class="post__action" href="edit.php?id=<?php echo $data['id']?>">編輯</a>
          </div>
        </div>
        <div class="post__info">
          <?php echo $data['create_date']?>
        </div>
        <div class="post__content">
          <?php echo htmlspecialchars($data['content'], ENT_QUOTES)?>
        </div>
        <a class="btn-read-more" href="blog.php?id=<?php echo $data['id'];?>">READ MORE</a>
      </article>
      <?php endforeach;?>
      <?php endif;?>
    </div>
    
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>