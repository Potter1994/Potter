<?php
require_once('conn.php');
$sql = "SELECT * FROM `user` WHERE id = '$_COOKIE[PHPSESSID]'";
$row = $conn -> query($sql);
if($row -> num_rows){
$data = $row -> fetch_assoc();
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
      <a href="logout.php"><button style="width: 100px;height: 40px;">登出</button></a>
      <h1 class="board__title">Comments</h1>
      <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
        <div class="board__nickname">
          <span>你好!</span>
          <span><?php echo $data['username'];?></span>
        </div>
        <div class="board__password">
          <span>歡迎留言</span>
        <input type="hidden" name="username" value="<?php echo $data['username'];?>">
        <textarea name="content" rows="5"></textarea>
        <input class="board__submit-btn" type="submit" />
        <p>
            <a href="edmit_context.php">編輯留言</a>
        </p>
    </form>
      <div class="board__hr"></div>
      <section>
            <?php
            $comments = $conn -> query("SELECT * FROM comment ORDER BY create_date DESC");
            if(!empty($comments -> num_rows) >= 1):?>
            <?php while($comment = $comments -> fetch_assoc()):?>
                <div class="card">
                <div class="card__avatar">
                </div>
                <div class="card__body">
                    <div class="card__info">
                        <span class="card__author"><?php echo $comment['username'];?></span>
                        <span class="card__time"><?php echo $comment['create_date'];?></span>
                    </div>
                    <p class="card__content">
                        <?php echo $comment['context'];?>
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
    $('form').submit((e)=>{
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "handle_add_comment.php",
            data: {
                username: $('input[name=username]').val(),
                content: $('textarea').val()
            },
            dataType: 'html'
        }).done(data=>{
            if(data == 'yes'){
                location.reload();
            }
        }).fail(err=>{
                console.log(err);
            })
    })
})

</script>
</body>
</html>