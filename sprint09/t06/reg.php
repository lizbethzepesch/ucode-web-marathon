<?php

require_once("connection/DatabaseConnection.php");
require_once("models/User.php");

if($_POST)
    $user = new User("users");
    $user->setLogin(trim($_POST['login']));
    $user->setPassword($_POST['password']);
    $user->setConfirm($_POST['confirm']);
    $user->setName(trim($_POST['name']));
    $user->setEmail(trim($_POST['email']));


if($user->save())
    echo '
    <script>
        window.location.replace("success.html");
    </script>
    ';
else
    echo '
    <script>
        window.location.replace("fail.html");
    </script>
    ';


?>