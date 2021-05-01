<?php

require_once("connection/DatabaseConnection.php");
require_once("models/Reminder.php");

if($_POST){
    $user = new Reminder(trim($_POST['login']), "users");
    $user->remind();
}




?>