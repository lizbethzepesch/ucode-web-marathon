<?php
error_reporting(0);
session_start();
if  (isset($_POST['password']))  $_SESSION['password'] = $_POST['password']; 
if  (isset($_POST['salt']))  $_SESSION['salt'] = $_POST['salt']; 
$_SESSION['hacked'] = 0;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>t02</title>
</head>
<body>
    <style>
        .ad{
            color: red;
        }
        .hacked{
            color: green;
        }
        .hidden{
        display:none;
        }
        
        .button {
            height: 20px;
        }
    
    </style>

    <h1>Password</h1>

    <form action="" method="post">
<?php
    if(md5($_SESSION['password'] . $_POST['salt']) ==  md5($_SESSION['pass_hacked'] . $_POST['salt']) ) {
        if($_SESSION['password']) echo '<p class="hacked">Hacked!</p>';

    }else
    {   if(!$_SESSION['password'])
         echo '<p class="ad">Access denied</p>';
    } ?>

    <p><?php if(!isset($_SESSION['password'])) echo 'Password not saved at session.';?> </p>
    <p><?php if(!isset($_SESSION['password'])) echo 'Password for saving to session. <input placeholder="Password to session" name="password">';?> </p>
    <p><?php if(!isset($_SESSION['password'])) echo 'Salt for saving to session. <input placeholder="Salt to session" name="salt">';?> </p>
    <input type="submit" value="Save" button <?php if(isset($_SESSION['password'])) echo ' class="hidden"';?>></input>




    <p><?php if(isset($_SESSION['password'])) echo 'Password saved at session.';?> </p>
    <p><?php if(isset($_SESSION['password'])) echo 'Hash: ' . md5($_SESSION['password'] . $_POST['salt']);?></p>
    <?php if(isset($_SESSION['password'])) echo "<span>Try to guess: ";?>
    <?php if(isset($_SESSION['password'])) echo '<input placeholder="Password to session" name="pass_hacked"> ';?>
    <input class="button" type="submit" value="Check password" <?php if(!isset($_SESSION['salt'])) echo 'class="hidden"';  ?>></input> </span>
   
<br>
    <input type="submit" value="Clear" <?php if(!isset($_SESSION['password']))  echo 'class="button hidden"'; else echo 'class="button"'; ?> <?php session_destroy(); session_start();?> > </input>

   </form> 

</body>
</html>