<?php

require_once("connection/DatabaseConnection.php");
require_once("models/Log_in.php");

if(isset($_POST['log_out']))
    echo '
    <script>
        window.location.replace("index.html");
    </script>
    ';


if($_POST)
    $user = new Log_in(trim($_POST['login']), $_POST['password'], "users");


if($user->login())
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