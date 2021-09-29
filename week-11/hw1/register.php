<?php
require_once('conn.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>會員註冊</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
      <h1 class="board__title">會員註冊</h1>
      <form class="board__new-comment-form" method="POST" action="handle_add_user.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" class="username"/>
        </div>
        <div class="board__password">
          <span>密碼：</span>
          <input type="password" name="password" class="password"/>
        </div>        
        <div class="board__password">
          <span>確認密碼：</span>
          <input type="password" name="password" class="checkpassword"/>
        </div>
        <input class="board__submit-btn" type="submit" value="註冊"/>
      </form>
      <div class="board__hr"></div>
  </main>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(()=>{
  $('.username').keyup(()=>{
    if($('.username').val() != ''){
      $.ajax({
        method:"POST",
        url: "check_user.php",
        data:{
          username: $('.username').val()
        },
        dataType:"html"
      }).done(data=>{
        if(data == "yes"){
          $('.username').attr('style','color:red;');
          $('.board__submit-btn').attr('style', 'color:red;').attr('disabled', 'disabled');
        }else{
          $('.username').attr('style','color:green;');
          $('.board__submit-btn').removeAttr('disabled', 'disabled').removeAttr('style', 'color:red;');
        }
      })
    }
    })



    $('form').submit((e)=>{
        e.preventDefault();
        if($('.password').val() == '' || $('.checkpassword').val() == ''){
            alert('請輸入密碼');
            return;
        }
        if($('.password').val() != $('.checkpassword').val()){
            alert('密碼錯誤，請再次確認密碼');
            return;
        }
        let result = confirm('確定註冊?');
        if(result === true)
        {$.ajax({
            method: "POST",
            url: 'handle_add_user.php',
            data: {
                username: $('.username').val(),
                password: $('.password').val()
            },
            dataType: 'html'
        }).done(data=>{
            location.href = 'admin_index.php';
        })}
    })

})



</script>


</body>
</html>