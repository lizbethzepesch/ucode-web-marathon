<?php
error_reporting(0);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>t03</title>
</head>
<body>
  

    <h1>Charset</h1>

    <form action="" method="post">

    <p>Change charset: <input placeholder="Input string" name="str"></p>
    
    <p>Select charset or several charsets:  
    <select multiple name="charsets[]">
        <option>UTF-8</option>
        <option>ISO-8859-1</option>
        <option>Windows-1252</option>
    </select>
    <input type="submit" value="Change charset"></input>
    <input type="submit" value="Clear"></input></p>
    </form> 
    

    <?php

    if( $_POST['str']){
        if($_POST['clear']) {
            unset($_POST['str']);
            unset($_POST['clear']);
            unset($_POST['charsets']);
        }else{

        echo "<p>Input string: <textarea>". $_POST['str'] ."</textarea> </p>";

        if($_POST['charsets'][0])
            echo "UTF-8 <textarea>" . mb_convert_encoding($_POST['str'], $_POST['charsets'][0]). "</textarea><br>";
        
        if($_POST['charsets'][1])
            echo "ISO-8859-1: <textarea>". mb_convert_encoding($_POST['str'], $_POST['charsets'][1]). "</textarea><br>";
        
        if($_POST['charsets'][2])
            echo "Windows-1252: <textarea>" . mb_convert_encoding($_POST['str'], $_POST['charsets'][2]) . "</textarea><br>" ;
        }
    }
    ?>   

</body>
</html>
