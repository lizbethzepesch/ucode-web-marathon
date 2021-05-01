<!DOCTYPE html>
<html lang="en">
<head>
    <title>t09</title>
</head>
<body>

<style>
.key{
    color: lightblue;
}
.value{
    color: darkolivegreen
}
.d{
    color: white;
    border: red 2px solid;
    background-color: gray;
    padding: 5px;
}
</style>
    <h1>Comics from Marvel API</h1>
    <?php    
    error_reporting(0);
    $public_api = "daff418e745383128662cd8b7cda15e2";
    $private_api = "1868cc92e4982785ca2e90a2eb57aa6cfd6f460e";
    $api = "http://gateway.marvel.com/v1/public/comics?"."ts=".time()."&apikey=".$public_api."&hash=".md5(time().$private_api.$public_api);

    $curl = curl_init();
    curl_setopt($curl, CURLOPT_URL, $api);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    $json = curl_exec($curl);
    curl_close($curl);
    echo "<div class=\"d\">";

    echo output(json_decode($json, true));

    function output($arr) {
        $out = "";
        foreach ($arr as $key => $value){
            if(is_array($value)){
                $out .= "<span ><br>" . $key . ": </span>";
                $out .= output($value);
            } else 
                $out .= "<span class=\"key\">" . $key . ": </span> <span class=\"value\">" . $value . "</span> <br>";
        }
        return $out;
    }


    

    echo "</div>";
    ?>
</body> 
</html>