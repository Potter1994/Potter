<?php
require_once('conn.php');
require_once('pagination.php');
?>
<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="normalize.css" />
  <link rel="stylesheet" href="style.css" />
  <style>
    .page{
      width: 900px;
      margin: 0 auto 15px;
      display:flex;
      justify-content: center;
    }
    .page a{
      font-size: 22px;
      display: block;
      padding: 4px 14px;
      color: #fff;
      background-color: #000;
      text-decoration: none;
      margin: 0 6px;
    }

  </style>
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
      <?php foreach($rows as $row):?>
      <article class="post">
        <div class="post__header">
          <div><?php 
            $str = htmlspecialchars($row['title'],ENT_QUOTES);
            echo (mb_strlen($str) > 100) ? mb_substr($str, 0, 100,'utf-8') : $str;
          ?></div>
          <div class="post__actions">
            <a class="post__action" href="edit.php?id=<?php echo $row['id']?>">編輯</a>
          </div>
        </div>
        <div class="post__info">
          <?php echo $row['create_date']?>
        </div>
        <div class="post__content">
          <?php 
          $str = htmlspecialchars($row['content'], ENT_QUOTES);
          echo (mb_strlen($str) > 200 ? mb_substr($str, 0, 200, "utf-8") . ' ... more' : $str);
          ?>
        </div>
        <a class="btn-read-more" href="blog.php?id=<?php echo $row['id']?>">READ MORE</a>
      </article>
      <?php endforeach;?>
    </div>
    
  </div>

  <?php if($rows):?>
  <div class="page">
    <a href="?p=<?php echo ($page > 1)? ($page-1):$page;?>">上一頁</a>
    <?php for($p = 1; $p <= $sum_page; $p++){
    echo '<a href=?p='."{$p}".'>'.$p.'</a>'. '<span> </span>';
    }
    ?>
    <a href="?p=<?php echo ($page < $sum_page)? ($page+1):$page;?>">下一頁</a>
  </div>
  <?php endif?>;
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>
</body>
</html>