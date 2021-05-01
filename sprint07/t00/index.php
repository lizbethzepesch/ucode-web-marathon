<!DOCTYPE html>
<html lang="en">
<head>
    <title>t00</title>
</head>
<body>
    <h1>Coolie counter</h1>
    <p>
        This page was loaded <strong>
            <?php
                if(isset($_COOKIE['loaded'])){
                    $counter = $_COOKIE['loaded'] + 1;
                } else {$counter = 1;}
                echo $counter;

                setcookie('loaded', $counter, time()+60, '/', '', false, false);

            ?>
        </strong> time(s) in last minute
    </p>
</body>
</html>