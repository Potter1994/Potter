<?php
    require_once('conn.php');
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; setchars=utf-8");
    if(empty($_GET['id'])){
        $json = [
            'ok' => false,
            'message' => 'No ID'
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }
    $id = $_GET['id'];
    $stmt = $conn->prepare("SELECT * FROM `todos` WHERE `id` = ?");
    $stmt->bind_param('s', $id);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result){
        $json = [
            'ok' => true,
            'message' => '成功連線',
            'data' => $result->fetch_assoc()
        ];
        $response = json_encode($json);
        echo $response;
        die();
    } else{
        $json = [
            'ok' => false,
            'message' => $conn->error
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }






?>