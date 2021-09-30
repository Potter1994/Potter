<?php
require_once('conn.php');
require_once('check_admin.php');
if(isset($_GET['id'])){
  $stmt = $conn->prepare("SELECT `title`, `content` FROM `article` WHERE `id` = ?");
  $stmt->bind_param('s', $id);
  $id = $_GET['id'];
  $stmt->execute();
  $result = $stmt->get_result();
  if($result->num_rows){
    $data = $result->fetch_assoc();
  }
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
          <li><a href="#">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="admin.php">管理後台</a></li>
          <li><a href="#">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>

  <?php include_once('banner.php');?>

  <div class="container-wrapper">
    <div class="container">
      <div class="edit-post">
        <form action="handle_create_article.php" method="POST">
          <div class="edit-post__title">
            發表文章：
          </div>
          <?php if(isset($_GET['id'])){
            echo "<input type='hidden' name='article_id' value='{$_GET['id']}'>";
          }
          ?>
          <div class="edit-post__input-wrapper">
            <input name="title" class="edit-post__input" placeholder="請輸入文章標題" <?php echo "value=" . "'{$data['title']}'";?>>
          </div>
          <div class="edit-post__input-wrapper">
            <textarea name="content" rows="20" class="edit-post__content"><?php if(isset($_GET['id'])){echo $data['content'];
              }?></textarea>
          </div>
          <div class="edit-post__btn-wrapper">
              <input type="submit" class="edit-post__btn" value="送出">
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(()=>{
      $('form').submit((e)=>{
        if($('textarea').val() == '' || $('input[type=title]').val() == ''){
          e.preventDefault();
          alert('標題及內容不能為空');
        }else{
          return true;
        }
      })






    })
  </script>
</body>
</html>