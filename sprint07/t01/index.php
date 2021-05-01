<?php
session_start();
if (isset($_POST['name']))  $_SESSION['name'] = $_POST['name']; 
    if  (isset($_POST['alias']))  $_SESSION['alias'] = $_POST['alias']; 
    if  (isset($_POST['age']))  $_SESSION['age'] = $_POST['age']; 
    if  (isset($_POST['about']))  $_SESSION['about'] = $_POST['about']; 
    if  (isset($_POST['photo']))  $_SESSION['photo'] = $_POST['photo']; 
    if  (isset($_POST['Strenght']))  $_SESSION['Strenght'] = $_POST['Strenght']; 
    if  (isset($_POST['Speed']))  $_SESSION['Speed'] = $_POST['Speed']; 
    if  (isset($_POST['Intelligence']))  $_SESSION['Intelligence'] = $_POST['Intelligence']; 
    if  (isset($_POST['Teleportation']))  $_SESSION['Teleportation'] = $_POST['Teleportation']; 
    if  (isset($_POST['Immortal']))  $_SESSION['Immortal'] = $_POST['Immortal']; 
    if  (isset($_POST['Another']))  $_SESSION['Another'] = $_POST['Another']; 
    if  (isset($_POST['Level']))  $_SESSION['Level'] = $_POST['Level']; 
    if  (isset($_POST['Publicity']))  $_SESSION['Publicity'] = $_POST['Publicity']; 
?>


<!DOCTYPE html>
<html>
    <head>
        <title>t01
        </title> 
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
    .data{
        border: 2px solid gray;
        padding: 20px;
    }
    .hidden{
        display:none;
    }
    .no{
        border:none;
    }
    </style>
        <h1>Session for new</h1>
        <form action="index.php" method="post" <?php if(isset($_SESSION['name'])) {echo 'class="hidden"';}?>>

            <fieldset>
                <legend>About the Superhero</legend>
                <label>Real Name</label><input placeholder="Superhero real name" autofocus name="name">
                <label>Current alias</label><input placeholder="Superhero alias" type="text" name="alias">
                <label>Age</label><input type="number" min="1" max="999" step="1" name="age">
                <br>
                <label>About</label> <textarea name="Text1" cols="70" rows="5" max="500" name="about" placeholder="Informatiom about the superhero, max 500 symbols"></textarea>
                <br> <label>Photo</label>
                <input type="file">
            </fieldset>

            <fieldset>
                <legend>Powers</legend>
                <input type="checkbox" name="Strenght" value="exsits">
                <label>Strenght</label>
                <input type="checkbox" name="Speed" value="exsits">
                <label>Speed</label>
                <input type="checkbox" name="Intelligence" value="exsits">
                <label>Intelligence</label>
                <input type="checkbox" name="Teleportation" value="exsits">
                <label>Teleportation</label>
                <input type="checkbox" name="Immortal" value="exsits">
                <label></label>
                <input type="checkbox" name="Another" value="exsit">
                <label>Another</label>
                <br>
                <label>Level of control:</label>
                <input type="range" step="1" min="0" max="10" value="1" name="level">
            </fieldset>

            <fieldset>
                <legend>Publicity</legend>
                <input type="radio" value="UNKNOWN" name="Publicity"> <label>UNKNOWN</label>
                <input type="radio" value="GHOST" name="Publicity"> <label>LIKE A GHOST</label>
                <input type="radio" value="COMICS" name="Publicity"> <label>I AM IN COMICS</label>
                <input type="radio" value="CLUB" name="Publicity"> <label>I HANE FUN CLUB</label>
                <input type="radio" value="SUPERSTAR" name="Publicity"> <label>SUPERSTAR</label>
            </fieldset>
            
        <input type="reset" value="CLEAR"></input>
        <input type="submit" value="SEND"></input>
        </form>

        <div class="data  <?php if(!isset($_SESSION['name'])) echo 'hidden';?>">
            
            <p><?php if(isset($_POST['name'])) { echo 'name: '.$_POST['name']; }?></p>
            <p><?php if(isset($_POST['age'])) { echo 'age: '.($_POST['age']); } ?></p>
            <p><?php if(isset($_POST['alias'])) { echo 'alias: '. ($_POST['alias']); } ?></p>
            <p><?php if(isset($_POST['about'])) { echo 'about: '. $_POST['about'];} ?></p>
            <p><?php if(isset($_POST['photo']))  { echo 'photo: '. $_POST['photo'];  } ?></p>
            
            <p><?php if(isset($_POST['level'])) { echo 'level: '. ($_POST['level']);  $_SESSION['level'] = $_POST['level'];} ?></p>
            <p><?php if(isset($_POST['Strenght'])) { echo 'Strenght: ' . ($_POST['Strenght']);  $_SESSION['Strenght'] = $_POST['Strenght'];  } ?></p>
            <p><?php if(isset($_POST['Speed'])) { echo 'Speed: ' . ($_POST['Speed']);  $_SESSION['Speed'] = $_POST['Speed'];  } ?></p>
            <p><?php if(isset($_POST['Intelligence'])) { echo 'Intelligence: ' . ($_POST['Intelligence']);   $_SESSION['Intelligence'] = $_POST['Intelligence'];} ?></p>
            <p><?php if(isset($_POST['Teleportation'])) { echo 'Teleportation: ' . ($_POST['Teleportation']); $_SESSION['Intelligence'] = $_POST['Intelligence']; } ?></p>
            <p><?php if(isset($_POST['Immortal'])) { echo 'Immortal: ' . ($_POST['Immortal']); $_SESSION['Immortal'] = $_POST['Immortal']; }?></p>
            <p><?php if(isset($_POST['Another'])) { echo 'Another: ' . ($_POST['Another']); $_SESSION['Another'] = $_POST['Another']; }?></p>
            <p><?php if(isset($_POST['Publicity'])) { echo 'Publicity: ' . ($_POST['Publicity']); $_SESSION['Publicity'] = $_POST['Publicity'];} ?></p>

    <form class="no" action="<?php session_destroy(); ?>" method="post" >
    <input type="submit" value="FORGET" ></input>
    </form>  
        </div>
        
    </body>
</html>
