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
      <h1 class="board__title">會員註冊</h1>
      <form class="board__new-comment-form" method="POST" action="handle_add_user.php">
        <div class="board__nickname">
          <span>暱稱：</span>
          <input type="text" name="nickname" class="nickname"/>
        </div>
        <div class="board__password">
          <span>密碼：</span>
          <input type="password" name="password" id="pwd"/>
        </div>
        <div class="board__password">
          <span>再次確認密碼：</span>
          <input type="password" name="password" id="check_pwd"/>
        </div>
        <input class="board__submit-btn" type="submit" value="註冊"/>
      </form>
  </main>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
      $(document).ready(()=>{
        $('form').submit((e)=>{
            if($('#pwd').val() != $('#check_pwd').val() || !$('#pwd').val() || !$('#check_pwd').val()){
                e.preventDefault();
                alert('請再次確認密碼');
            }
            if(!$('.nickname').val()){
                e.preventDefault();
                alert('請輸入暱稱');
            }
        })
      })
  </script>


</body>
</html>