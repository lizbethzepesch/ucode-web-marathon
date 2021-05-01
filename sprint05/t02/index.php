<?php

function checkDivision($a = 1, $b = 60){
    $result = '';
    for($i = $a; $i <= $b; $i++){
        $result .= 'The number ';
        $result .= $i;
        if ($i % 2 == 0)
            $result .= " is divisible by 2,";
        
        if ($i % 3 == 0)
            $result .= " is divisible by 3,";
        
        if ($i % 10 == 0)
            $result .= " is divisible by 10,";

        if (strrpos($result, ','))
            $result .= ' - ';

        $result = substr($result, 0, strlen($result) - 1);
        $result .= "\n";
    }
    echo $result;
}

echo "*** Range is 3 - 7 checkDivision(3,7) ***\n";
checkDivision(3,7);
echo "\n*** Range is 58 - ... checkDivision(58) ***\n";
checkDivision(58);
echo "\n*** Range is ... - ... checkDivision() ***\n";
checkDivision();

?>