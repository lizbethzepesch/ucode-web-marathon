<?php 
error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush();

require ('WebSocketServer.php');

$server = new WebSocketServer('127.0.0.1', 3434);
// максимальное время работы 100 секунд, выводить сообщения в консоль
$server->settings(60, true);

// эта функция вызывается, когда получено сообщение от клиента
$server->handler = function($connect, $data) {
    //for($i = 0 ; $i < count($connect); $i++){
    WebSocketServer::response($connect, $data);
    //}
    /*foreach($connect as $key => $value){
        if($key != 'hello'){
            WebSocketServer::response($value, $data);
        }
    }*/
};
//ws://127.0.0.1:7777
//php -f serverRun.php
$server->startServer();