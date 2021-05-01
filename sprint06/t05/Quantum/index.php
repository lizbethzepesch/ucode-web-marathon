<?php 

namespace Space\Quantum;

use \DateInterval;
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

?>