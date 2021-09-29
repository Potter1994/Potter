<?php
@session_start();
require_once('conn.php');
if(empty($_SESSION['role'])){
    header('Location: index.php');
}
if($_SESSION['role'] != 2){
    die('fail');
}
$data = array();
$stmt = $conn->query("SELECT `username`,`role` FROM `user`");
if($stmt->num_rows >= 1){
    while($row = $stmt->fetch_assoc()){
        $datas[] = $row;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            padding:0;
            margin:0;
        }
        body{
            width: 100%;
        }
        table{
            width: 400px;
            border: 1px solid #eee;
            margin: 70px auto;
        }
        th{
            /* border: 4px solid #faa; */
            font-size: 20px;
            padding: 6px;
            text-align: center;
            background-color: #000;
            color: #fff;
        }
        td{
            text-align: center;
            border: 1px solid #daa;
            padding: 6px;
        }
        h2{
            padding: 30px;
        }
    </style>
</head>
<body>
    <h2><a href="admin_index.php">首頁</a></h2>
    <table>
        <thead>
            <th>USERNAME</th>
            <th>ROLE</th>
            <th>調整身份權限</th>
        </thead>
        <?php if(count($datas) >= 1):?>
        <?php foreach($datas as $data):?>
        <tr>
            <td><?php echo $data['username'];?></td>
            <td><?php 
            if($data['role'] == 0){
                echo "遭停權使用者";
            } else if($data['role'] == 1){
                echo "一般使用者";
            } else if($data['role'] == 2){
                echo "管理者";
            }else{
                echo "身分未定義";
            }
            ?></td>
            <td>
                <?php echo
                "<form method='POST' action='change_role.php'>
                    <select name='identity'>
                        <option value=''>調整身份</option>
                        <option value='1'>一般使用者</option>
                        <option value='0'>停權使用者</option>
                    </select>
                    <input type='hidden' name='username' value='{$data['username']}'>
                    <input type='submit' value='更改'>
                </form>";?>
            </td>
        </tr>
        <?php endforeach;?>
        <?php endif;?>
    </table>


    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(()=>{
            $('form').submit((e)=>{
                e.preventDefault();
                $.ajax({
                    method: 'POST',
                    url: 'change_role.php',
                    dataType: 'html',
                    data: {
                        identity: e.target.querySelector('select[name=identity]').value,
                        username: e.target.querySelector('input[name=username]').value
                    }
                }).done(data=>{
                    location.reload();
                })
            })







        })
    </script>


</body>
</html>