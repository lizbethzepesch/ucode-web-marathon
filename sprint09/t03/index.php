<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>t03</title>
</head>
<body>

<h1>Router</h1>

<?php
include 'Router.php';

if($_GET) {
    $router = new Router();
    echo $router->print_params();
}

?>


</body>
</html>