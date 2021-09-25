<?php
require_once('conn.php');
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
      <form class="board__new-comment-form" method="POST" action="php/add_user.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" id="nickname"/>
        </div>
        <div class="board__password">
          <span>密碼：</span>
          <input type="password" name="password" id="password"/>
        </div>
        <div class="board__password">
          <span>確認密碼：</span>
          <input type="password" name="password" id="checkpassword"/>
        </div>
        <div class="board__button">
          <button type="submit" class="register">註冊</button>
        </div>

      </form>
    </main>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>

$(document).ready(()=>{

    $('.board__new-comment-form').submit((e)=>{
        e.preventDefault();
        if($('#password').val() != $('#checkpassword').val()){
            alert('輸入密碼錯誤');
            return false;
        } else{
            $.ajax({
                method: 'POST',
                url: 'php/add_user.php',
                data: {
                    'nickname': $('#nickname').val(),
                    'password': $('#password').val()
                },
                dataType: 'html'
            }).done((data)=>{
                if(data == 'yes'){
                    alert('註冊成功');
                    window.location.href = 'admin/index.php';
                    return;
                }
                else{
                    console.log(data);
                    alert('註冊失敗');
                }
            }).fail((jqXHR, textStatus, errorThrown)=>{
                console.log(jqXHR.responseTEXT);
            })
        }


    });


    $('.board__nickname').keyup((event)=>{
        if($(event.target).val() != ''){
            $.ajax({
                method: 'POST',
                url: 'php/check_username.php',
                data: {
                    'nickname' : $(event.target).val()
                },
                dataType: 'html'
            }).done((data)=>{
                if(data == 'yes'){
                    $(event.target).css('color', 'red');
                    $('.register').attr('disabled', true);
                } else{
                    $(event.target).css('color', 'green');
                    $('.register').attr('disabled', false);
                }
            }).fail((jqXHR, textStatus, errorThrown)=>{
                console.log(jqXHR.responseTEXT);
            })
        }
        else{
            $('.board__new-comment-form button').attr('disabled', true);
        }
    })

    


})



    </script>

</body>
</html>