<?php
session_start();

include "models/Router.php";
include 'controller/Main.php';
include 'view/View.php';


if(!isset($_GET['moveTo'])){
    $_SESSION['url'] = "/Users/ykliuieva/ykliuieva/t06/main.html";
    $page = new View($_SESSION['url']);
    $page->render();
}

if(isset($_GET['moveTo'])){
    switch ($_GET['moveTo']){
        case 'Remind':
            $page = new View('/Users/ykliuieva/ykliuieva/t06/reminder.html');
            $page->render();
            break;
        case 'signUp':
            $page = new View('/Users/ykliuieva/ykliuieva/t06/reg.html');
            $page->render();
            break;
        case 'logIn':
            $page = new View('/Users/ykliuieva/ykliuieva/t06/login.html');
            $page->render();
            break;    
    }
}


?>