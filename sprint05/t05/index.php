<?php

class StrFrequency{
    private $str;

    function __construct($value){
        $this->str = $value;
    }

    function letterFrequencies(){
        $r = array();
        if(!($this->str)){
            return $r;
        }
        $res = array($this->str[0] => 0);
        $string = str_split(strtoupper($this->str));
        foreach($string as $i){
            if(IntlChar::isalpha($i)){
                if (array_key_exists($i, $res)){
                    $res[$i] += 1;
                }
                else{
                    $res[$i] = 1;
                }
            }
        }
        ksort($res);
        return $res;
    }

    function wordFrequencies(){
        $r = array();
        if(!($this->str)){
            return $r;
        }
        $s = strtoupper($this->str);
        $s = preg_replace( '/[^a-zA-Z ]/i', '', $s);
        $string = explode(" ", $s);

        $res = array($string[0] => 0);
        foreach($string as $i)
            if (array_key_exists($i, $res))
                $res[$i] += 1;
            else
                $res[$i] = 1;
        
        return $res;
    }

    function reverseString(){
        if(!$this->str)
            return;
        $array = str_split($this->str);
        $res = '';
        $counter = strlen($this->str) - 1;
        for ($i = 0; $i < $counter; $i++){
            $i .= "1";
        }
    
        foreach($array as $i){
            $res[$counter] = $i;
            $counter--;
        }
        return $res;
    }
}


// function test($string) {
//     $obj = new StrFrequency($string);
//     $symbol = $obj->letterFrequencies();
//     echo "Letters in " . $string . "\n";

//     foreach ($symbol as $k => $v) {
//         echo "Letter ". $k . " is repeated " . $v . " times\n";
//     }

//     $symbol = $obj->wordFrequencies();
//     echo "Words in " . $string . "\n";

//     foreach ($symbol as $k => $v) {
//         echo "Word " . $k . " is repeated " . $v . " times\n";
//     }

//     echo "Reverse the string: " . $string . "\n";
//     echo $obj->reverseString() . "\n";
// }

// test("Face it, Harley-- you and your Puddin' are kaput!");
// echo "*************\n";
// test(" Test test 123 45 !0 f HeLlO wOrLd ");
// echo "*************\n";
// test("");
?>