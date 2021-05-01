<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>

<body>
    
    <p><?php
    function calculate_time() {
        return date_diff(date_create('1939-01-01'), date_create('Now'));
    }
    $time = calculate_time();
    echo "In real life you were absent for " . $time->format("%Y") . " years, " .
        $time->format("%m") . " months, " . $time->format("%d") . " days\n";
    ?></p>
</body>

</html>