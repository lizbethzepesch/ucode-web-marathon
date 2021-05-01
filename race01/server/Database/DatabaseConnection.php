<?php

class DatabaseConnection
{
  public $connection;
  function __construct($host = "127.0.0.1", $port = 3306, $username = "root", $password = "password", $database = "ucode_web")
  {
    try{
      if($port === NULL){
        $dsn = "mysql:host=$host;dbname=$database";
      }
      else{
        $dsn = "mysql:host=$host;port=$port;dbname=$database";
      }
      //$dsn = "mysql:host=127.0.0.1;dbname=ucode_web";
      $this->connection = new PDO($dsn,$username, $password,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
    }catch(PDOException $e ){
      echo "Connection failed: " . $e->getMessage();
    }
  }
  public function getConnectionStatus(){
    if($this->connection){
      return true;
    }
    else {
      return false;
    }
  }
  function __destruct(){
    $this->connection = NULL;
  }
  private function isUser($username){
    try {
      $request = "SELECT count(*) FROM users WHERE username='$username'";

      $query = $this->connection->query($request);
      if($query->fetch()[0] == 0 ){

        return true;
      }

      $query = NULL;
      return false;
    } catch (\Exception $e) {
      echo $e->getMessage();
    }
  }
  public function registerUser($username, $password, $id_class)
  {
    try {
      if (self::isUser($username) == true) {
        $query = $this->connection->prepare("INSERT INTO users(username, password, id_class) VALUES(:username, :password, :id_class)");
        $query->execute(['username' => $username, 'password' => $password,'id_class' => $id_class]);
        return true;
      }
      else {
        echo "This user already exists!";
        return false;
      }
    } catch (\Exception $e) {
      echo $e->getMessage();
    }
  }
  public function loginUser($username, $pass){
    try {
      $query = $this->connection->query("SELECT COUNT(*) AS counter, users.id_user, users.username,
                                        hero_class.name, hero_class.img
                                        FROM users
                                        INNER JOIN hero_class ON users.id_class = hero_class.id_class
                                        WHERE users.username = '$username' AND password = '$pass'");
      $row = $query->fetch(PDO::FETCH_OBJ);
      if($row->counter == 1){
        return  array('id' => $row->id_user,
                    'username' => $row->username,
                    'hero' => $row->name,
                    'img' => $row->img);
      }
      else {
        echo "Incorrect password or login!";
        return NULL;
      }
      $query = NULL;
      return false;
    } catch (\Exception $e) {
      echo $e->getMessage();
    }
  }
  public function getUserDeck($username){
    try {
      $query = $this->connection->query("SELECT * FROM cards
              INNER JOIN hero_class ON cards.id_class = hero_class.id_class
              INNER JOIN users ON cards.id_class = users.id_class
              WHERE users.username = '$username'");
      
      return $query->fetchAll(PDO::FETCH_ASSOC);

    } catch (\Exception $e) {
      echo $e->getMessage();
    }
  }
}
//$test = new DatabaseConnection();
//echo $test->getConnectionStatus();
//$temp = $test->registerUser("test1", "qwertty", 1);
//print_r($test->getUserDeck("test1"));

