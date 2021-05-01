<!DOCTYPE html>
<html lang="en">
<head>
    <title>t08</title>
</head>
<body>
    <style>
       
    
    </style>

    <h1>Show other sites</h1>

    <form action="index.php" method="post">
        <input type="url" placeholder="url" name="url">
        <input type="submit" value="go"></input>
    </form>
    <form action="index.php" method="post">
        <input type="BACK" placeholder="BACK" name="BACK" value="true" style="display: none;">
        <input type="submit" value="BACK" style="border: none; background: white;">
    </form>
    <hr>
   <div>
   <?php    
   error_reporting(0);

    if($_POST['BACK'] == "true") echo("<p>Type an URL......................</p>");
   
    if($_POST['url']){

        echo "<p> url: ". $_POST['url'] . "</p> ";
        echo "<hr>";

        $output = file_get_contents($_POST['url']);
        if(strpos($output, "<body") !== false) {
            $output = explode("<body", $output)[1];
            $output = explode("</body>", $output)[0];
            $output = "<body".$output."</body>";
        }
        
        echo("<br><code>");
        $output = str_replace("<", "&#60;", $output);
        $output = str_replace(">", "&#62;", $output);
        $output = nl2br($output);
        echo $output."</code></div>";
    }
   ?>
</div>
</body> 
</html>