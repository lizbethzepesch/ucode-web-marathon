<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Quantum space</title>
</head>

<body>
    
    <p><?php
    function calculate_time() 
    {
        $result = date_diff(date_create("Now"), date_create("1939-01-01"));
        $result = date_diff(((date_create("1939-01-01"))->add(new DateInterval('PT'.((int)($result->format("%a")/7*24*3600)).'S'))), (date_create("1939-01-01"))); 
        return [ 
            $result->format("%Y"), 
            $result->format("%m"), 
            $result->format("%d") 
        ]; 
    }
    $time = calculate_time();
    echo "In quantum space you were absent for " . $time[0] . " years, " .
    $time[1] . " months, " . $time[2] . " days";
    ?></p>
</body>

</html>