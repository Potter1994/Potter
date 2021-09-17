<?php
@session_start();

function get_all_message(){
    $sql = "SELECT * FROM `message`";
    $datas = array();
    $query = mysqli_query($_SESSION['link'], $sql);
    if($query){
        if(mysqli_num_rows($query) >= 1){
            while($row = mysqli_fetch_assoc($query)){
                $datas[] = $row;
            }
        }
    }
    return $datas;
}

function add_message($content){
    $result = null;
    $sql = "INSERT INTO `message`(`name`, `content`) VALUES('托普', '{$content}')";
    $query = mysqli_query($_SESSION['link'], $sql);
    if(mysqli_affected_rows($_SESSION['link'])){
        $result = true;
    }
    else{
        echo "sql語法錯誤: <br>" . mysqli_error($_SESSION['link']);
    }
    return  $result;
}
?>