<?php
require_once 'php/db.php';
require_once 'php/function.php';
$datas = get_all_message();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首頁</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


<?php include_once "menu.php"?>


<div class="container">
    <div class="wrap">
        <h3>你好! bbb</h3>
        <h1>Comments</h1>
        <form method="POST" action="php/add_message.php" class="comment">
            <textarea name="cotent" id="textarea" cols="30" rows="8"></textarea>
            <button type="submit">提交</button>
        </form>
    </div>
    <hr>
</div>
<?php foreach($datas as $data):?>
<div class="container container_message">
    <div class="wrap write">
        <div class="pic"><img src="god.jpg"></div>
        <div class="text">
            <div class="time"><?php echo $data['create_time'];?></div>
            <div class="message_content"><?php echo $data['content']?></div>
        </div>
    </div>
</div>

<?php endforeach;?>




    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function(){
            $(".comment").on('submit', function(){
            $.ajax({
                url: "php/add_message.php",
                method: "POST",
                dataType: "html",
                data: {
                    'content' : $('textarea').val()
                }
            }).done(function(data){
                if(data == 'yes'){
                    alert('新增成功');
                    window.location.reload();
                }
                else{
                    alert('新增失敗請確認網路連線狀況');
                    console.log(data);
                }
            }).fail(function(jqXHR, textStatus, errorThrown){
                console.log(jqXHR.responseTEXT);
            })
            return false;
        })






        })


    </script>


</body>
</html>
