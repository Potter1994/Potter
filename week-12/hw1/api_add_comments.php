<?php
    require_once('conn.php');
    
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; setchars=utf-8");
    if(empty($_POST['title']) || empty($_POST['content'])){
        $json = [
            'ok' => false,
            'message' => 'fail'
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }
    $stmt = $conn->prepare("INSERT INTO `article` (`title`, `content`) VALUES (?,?)");
    $stmt->bind_param('ss', $title, $content);
    $title = $_POST['title'];
    $content = $_POST['content'];
    $stmt->execute();
    if(!$stmt){
        $json = [
            'ok' => false,
            'message' => 'fail'
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }
    $json = [
        'ok' => true,
        'data' => '新增成功'
    ];
    $response = json_encode($json);
    echo $response;
    die();
?>