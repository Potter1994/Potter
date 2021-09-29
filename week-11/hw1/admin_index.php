<?php
@session_start();
require_once('conn.php');
$sql = "SELECT * FROM `user` WHERE `id` = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $id);
$id = "$_COOKIE[PHPSESSID]";
$stmt->execute();
$result = $stmt->get_result();
if($result->num_rows == 1){
    $row = $result->fetch_assoc();
    $_SESSION['login_username'] = $row['username'];
    $_SESSION['role'] = $row['role'];
}else{
    header('Location: index.php');    
}
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
      <button class="logout" style="width: 100px;height:40px;">登出</button>
      <h1 class="board__title">Comments</h1>
      <h2>HI,  <?php echo $row['username'];?></h2>
      <p>留言板</p><a href="admin_edit<?php if($row['role'] == 0 || $row['role']==1){
        echo 1;
      }
      else if($row['role'] == 2){
        echo 2;
      };?>.php">管理留言</a>
      <?php 
      if($row['role'] == 2){
      echo "<a href='manager.php'>管理人員權限</a>";};?>
      <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
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
    $('.board button').click(()=>{
        location.href = "logout.php";
    })

    $('.board__new-comment-form').submit((e)=>{
      e.preventDefault();
      $.ajax({
        method:'POST',
        url: 'handle_add_comment.php',
        data: {
          content: $('textarea').val()
        },
        dataType: 'html'
      }).done(data=>{
        if(data == 'yes'){
          location.reload();
        }else{
          alert(data);
        }
      }).fail(err=>{
        console.log(err);
      })



    })



    })
</script>


</body>
</html>