<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>What Thanos did for the Soul Stone?</title>
</head>

<body>
    <h1>What Thanos did for the Soul Stone?</h1>
    <div class="rad">
    <style>
    .rad{
        display:flex;
        flex-direction:column;
    }
    </style>
    <form action="index.php" method="post">
    <div><label><input type="radio" id="radioButton" name="did" value="1">Jumped from the mountain</label></div>
    <div><label><input type="radio" id="radioButton" name="did" value="1">Made stone keeper to jump from the mountain</label></div>
    <div><label><input type="radio" id="radioButton" name="did" value="2">Pushed Gamora off the mountain</label></div>
    </div>
    <button>I made a choice!</button>
</form>
    <p><?php
        error_reporting(0);
        $what_did = $_POST['did'];
        if($what_did) 
            switch($what_did) {
                case 1: echo("nein"); break;
                case 2: echo("ja"); break;
            }
        
    ?></p>
</body>

</html>