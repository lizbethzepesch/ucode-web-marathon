<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>

<body>
    
    <p><?php
    function calculate_time() {
        $first = date_create('1939-01-01');
        $last = date_create('Now');
        return date_diff($first, $last);
    }
    $time = calculate_time();
    echo "In real life you were absent for " . $time->format("%Y") . " years, " .
    $time->format("%m") . " months, " . $time->format("%d") . " days";

    ?></p>
</body>

</html>