<?php

require_once("models/Model.php");

class Log_in extends Model{


    public function __construct($login, $password, $table){
        $this->login = $login;
        $this->password = $password;
        parent::__construct($table); 
    }


    public function login(){
        $str = $this->db->connection->query("SELECT password, admin FROM " . $this->table . " WHERE login = '" . $this->login . "';");
        $array = $str->fetch(PDO::FETCH_ASSOC);

        if($array)
            if ($array['password'] == $this->password) return true;
        return false;
    }
}


?>