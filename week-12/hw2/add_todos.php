<?php
    require_once('conn.php');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; setchars=utf-8");
    if(empty($_POST['todo'])){
        $json = [
            'ok' => false ,
            'message' => 'fail to get POST value!'
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }
    $todo = $_POST['todo'];
    $stmt = $conn->prepare("INSERT INTO `todos` (`todo`) VALUES (?)");
    $stmt->bind_param('s', $todo);
    $result = $stmt->execute();
    if(!$result){
        $json = [
            'ok' => false,
            'message' => $conn->error
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }
    $json = [
        'ok' => true,
        'message' => '新增成功',
        'id' => $conn->insert_id
    ];
    $response = json_encode($json);
    echo $response;
    die();
?>