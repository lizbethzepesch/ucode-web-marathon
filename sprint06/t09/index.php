<!DOCTYPE html>
<html>
    <head>
        <title>
        </title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

    <style>
    form {
        border: 2px solid gray;
        padding: 20px;
    }

    label {
        padding: 10px;
    }

    textarea, input, button {
        margin-top: 20px;
    }
    .post{
        border: 3px gray solid;
        padding: 20px;
        margin-bottom: 10px;
        background: darkgray;
    }
    </style>
    

        <h1>New Avenger application</h1>
        
        
    <div class="post"> 
        POST  
         <pre> 
       <?php
            error_reporting(0);
            $arr = ["name" => $_POST['name'], "email" => $_POST['email'],
                        "age" => $_POST['age'], "descrition" => $_POST['descrition'],
                        "photo" => $_POST['photo']];
            if($arr['name'] != null){
               
                print_r($arr);
                
            }
                
        ?></pre>
    </div>

        <form action="index.php" method="post">
            <fieldset>
                <legend>About the Superhero</legend>
                <label>Name<input name="name" placeholder="Superhero real name" autofocus></label>
                <label>E-mail<input name="email" placeholder="Tell your e-mail" type="text"></label>
                <label>Age<input name="age" type="number" min="1" max="999" step="1"></label>
                <br>
                <label>About<textarea name="descrition" cols="70" rows="5" max="500" placeholder="Informatiom about the superhero, max 500 symbols"></textarea></label> 
                <br> <label>Photo<input type="file" name="photo"></label>
                
            </fieldset>
            
            
        <button type="reset" name="clear" value="CLEAR">CLEAR</button>
        <button type="submit" name="send" value="SEND">SEND</button>
        </form>
        
    </body>
</html>
