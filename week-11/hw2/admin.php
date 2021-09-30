<?php
require_once('conn.php');
require_once('check_admin.php');
require_once('get_article.php');
?>

<!DOCTYPE html>

<html>
<head>
  <meta charset="utf-8">

  <title>部落格</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- <link rel="stylesheet" href="normalize.css" /> -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <nav class="navbar">
    <div class="wrapper navbar__wrapper">
      <div class="navbar__site-name">
        <a href='index.php'><?php echo $user['username']?>'s Blog</a>
      </div>
      <ul class="navbar__list">
        <div>
          <li><a href="article_list.php">文章列表</a></li>
          <li><a href="#">分類專區</a></li>
          <li><a href="#">關於我</a></li>
        </div>
        <div>
          <li><a href="edit.php">新增文章</a></li>
          <li><a href="logout.php">登出</a></li>
        </div>
      </ul>
    </div>
  </nav>

<?php include_once('banner.php');?>
<?php if(isset($datas)):?>
  <div class="container-wrapper">
    <div class="container">

      <?php foreach($datas as $data):?>
      <div class="admin-post">
        <div class="admin-post__title">
            <?php echo htmlspecialchars($data['title'], ENT_QUOTES);?>
        </div>
        <div class="admin-post__info">
          <div class="admin-post__created-at">
            <?php echo $data['create_date']?>
          </div>
          <a class="admin-post__btn" href="edit.php?id=<?php echo $data['id']?>">
            編輯
          </a>
          <a class="admin-post__btn delete" href="handle_delete.php?id=<?php echo $data['id']?>">
            刪除
          </a>
        </div>
      </div>
      <?php endforeach;?>

    </div>
  </div>
<?php endif;?>
  <footer>Copyright © 2020 Who's Blog All Rights Reserved.</footer>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(()=>{
      $('.delete').click((e)=>{
        e.preventDefault();
        $.ajax({
          method: 'GET',
          url: e.target.href,
          dataType: 'html'
        }).done(data=>{
          if(data == 'yes'){
            location.reload();
          }else{
            alert('刪除失敗')
          }
        }).fail(err=>{
          console.log(err);
        })
      })


    })


  </script>
</body>
</html>