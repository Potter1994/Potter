<?php
require_once('conn.php');
$result = $conn -> query("SELECT * FROM `user` WHERE `id` = '$_COOKIE[PHPSESSID]'");
$data = $result -> fetch_assoc();
$comment = $conn -> query("SELECT * FROM `comment` WHERE `id` = $_GET[id]");
$comment = $comment -> fetch_assoc();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <a href="logout.php"><button style="width: 100px;height: 40px;">登出</button></a>
      <h1 class="board__title">Comments</h1>
        <div class="board__nickname">
          <span>你好!</span>
          <span><?php echo $data['username'];?></span>
        </div>
        <p>
            <a href="admin_index.php">回首頁</a>
        </p>
        <form method="POST" action="handle_update.php?id=<?php echo $_GET['id'];?>">
             <div class="card">
          <div class="card__avatar">
          </div>
          <div class="card__body">
              <div class="card__info">
                <span class="card__author"><?php echo $comment['username'];?></span>
                <span class="card__time"><?php echo $comment['create_date'];?></span>
              </div>
              <p class="card__content">
                <?php echo "<textarea name='content' rows='5'>{$comment['context']}</textarea>";?>
              </p>
            </div>
          </div>
          <input type="submit">
        </form>
</body>
</html>