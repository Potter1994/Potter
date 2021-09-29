<?php
@session_start();
require_once('conn.php');
require_once('check_login.php');
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
      <h1 class="board__title">Comments</h1>
      <form class="board__new-comment-form" method="POST" action="login.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" />
        </div>
        <div class="board__password">
          <span>密碼：</span>
          <input type="password" name="password" />
        </div>
        <div class="board__button">
          <button class="login">登入</button>
          <button class="register">註冊</button>
        </div>
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
      </form>
      <div class="board__hr"></div>

      <section>
      <?php 
        $result = $conn->query("SELECT * FROM `comment` ORDER BY `create_date` DESC");
        if($result->num_rows >= 1):?>
      <?php while($row = $result->fetch_assoc()):?>
        <div class="card">
          <div class="card__avatar">
          </div>
          <div class="card__body">
              <div class="card__info">
                <span class="card__author"><?php echo $row['username'];?></span>
                <span class="card__time"><?php echo $row['create_date']?>;</span>
              </div>
              <p class="card__content">
                <?php echo $row['content'];?>
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
    $('.register').click((e)=>{
      e.preventDefault();
      location.href = "register.php";
    })

    $('.login').click((e)=>{
      e.preventDefault();
      $.ajax({
        method:'POST',
        url:'login.php',
        data: {
          username: $('input[name=nickname]').val(),
          password: $('input[name=password]').val()
        },
        dataType:'html'
      }).done(data=>{
        console.log(data);
        if(data == 'yes'){
          location.href = 'admin_index.php';
          return;
        }else{
          alert('帳號或密碼錯誤');
        }
      }).fail(err=>{
        alert(err);
      })
    })

    $('form').submit((e)=>{
      e.preventDefault();
    })


  })
</script>


</body>
</html>