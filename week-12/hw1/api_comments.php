<?php
    require_once('conn.php');
    header("Content-Type: application/json; setchars=utf-8");
    header("Access-Control-Allow-Origin: *");
    if(empty($_GET['site_key']) || $_GET['site_key'] != 'potter'){
        $json = [
            'ok' => false,
            'message' => '請輸入site_key'
        ];
        $response = json_encode($json);
        echo $response;
        die();
    }

    // 有收到 site_key
    if(empty($_GET['cursor'])){
    $result = $conn->query("SELECT * FROM `article` ORDER BY `create_date` DESC LIMIT 4");
    $total = $result->num_rows;
    $datas = [];
    if($result->num_rows >= 1){
        while($row = $result->fetch_assoc()){
            $datas[] = $row;
        }
    }
    $json = [
        'ok' => true,
        'data' => $datas
    ];
    $response = json_encode($json);
    echo $response;
    $conn->close();
    die();
    } 
    elseif($_GET['cursor']){
        $stmt = $conn->prepare("SELECT * FROM `article` WHERE `id` <= ? ORDER BY `create_date` DESC LIMIT 4");
        $stmt->bind_param('i', $cursor);
        $cursor = $_GET['cursor'];
        $stmt->execute();
        $result = $stmt->get_result();
        $total = $result->num_rows;
        $datas = [];
        if($result->num_rows >= 1){
            while($row = $result->fetch_assoc()){
                $datas[] = $row;
            }
        }
        $json = [
            'ok' => true,
            'data' => $datas
        ];
        $response = json_encode($json);
        echo $response;
        $conn->close();
        die();
    }
?>