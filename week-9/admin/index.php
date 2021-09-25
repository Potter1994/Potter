<?php
require_once('../conn.php');
require_once('../php/check_user_login.php');
$datas = $con -> query('SELECT * FROM `comment` ORDER BY `id` DESC LIMIT 50');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <h1 class="board__title">Comments</h1>
      <form class="board__new-comment-form" method="POST" action="../php/add_comment.php">
        <div class="board__nickname">
          <span>HI, <?php echo $user['username'] . '<br>';?></span>
          <span>歡迎留言</span>
        </div>
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </form>
      <div class="board__hr"></div>
      <section>
          <?php 
            if($datas -> num_rows > 0):?>
            <?php
              while($row = $datas -> fetch_assoc()):?>
        <div class="card">
          <div class="card__avatar">
          </div>
          <div class="card__body">
              <div class="card__info">
                <span class="card__author"><?php echo $row['username']?></span>
                <span class="card__time">2020-05-06 11:11:11</span>
              </div>
              <p class="card__content">
                <?php echo "{$row['context']}";?>
              </p>
            </div>
          </div>
          <?php endwhile;?>
        <?php endif;?>
      </section>
  </main>


  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    $(document).ready(()=>{
      $('.board__new-comment-form').submit((e)=>{
        e.preventDefault();
        $.ajax({
          method: 'POST',
          url: '../php/add_comment.php',
          data: {
            'context': $('textarea').val()
          },
          dataType: 'html'
        }).done((data)=>{
          window.location.reload();
        })

      })


    })

  </script>
</body>
</html> 