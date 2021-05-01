<?php

require_once("models/Model.php");

class Reminder extends Model{
    public function __construct($login, $table){
        $this->login = $login;
        parent::__construct($table); 
    }


    public function remind(){
        $str = $this->db->connection->query("SELECT password, email FROM " . $this->table . " WHERE login = '" . $this->login . "';");
        $array = $str->fetch(PDO::FETCH_ASSOC);

        if($array)
            mail($array['email'], null, "your password is " .$array['password']);        
        
        return false;
    }
}


?>