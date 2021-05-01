<?php
    require_once("models/Model.php");

    class User extends Model{
        public $id = NULL;
        public function __construct($table_name) { 
            parent::__construct($table_name); 
        }

        public function setLogin($login) { $this->login = $login; }
        public function setPassword($password) { $this->password = $password; }
        public function setAdmin($admin) { $this->admin = $admin; }
        public function setConfirm($confirm) { $this->confirm = $confirm; }
        public function setName($name) { $this->name = $name; }
        public function setEmail($email) { $this->email = $email; }

        public function getLogin() { return $this->login; }
        public function getPassword() { return $this->password; }
        public function getAdmin() { return $this->admin; }
        public function getConfirm() { return $this->confirm; }
        public function getName() { return $this->name; }
        public function getEmail() { return $this->email; }

        function checkdata() {
            $newTable = $this->db->connection->query(
            "SELECT id, login FROM " . $this->table . " WHERE login = '" . 
            $this->login . "' or " . " email = '" . $this->email . "';");
            $table = $newTable->fetch(PDO::FETCH_ASSOC);

            if ($table) 
                return false;
            
            if($this->password != $this->confirm) 
                return false;
            
            return true;
        }

        function save() {
            if ($this->checkdata()) {
                $newTable = $this->db->connection->query("SELECT id, login FROM " . $this->table . " WHERE login = '" . $this->login . "';");
                $array = $newTable->fetch(PDO::FETCH_ASSOC);
                $sqlReq = "INSERT INTO `$this->table` (login, admin, password, name, email) VALUES (:login, false, :password, :name, :email)";
                $stmt = $this->db->connection->prepare($sqlReq);
                $stmt->bindParam(":login", $this->login);
                $stmt->bindParam(":password", $this->password);
                $stmt->bindParam(":name", $this->name);
                $stmt->bindParam(":email", $this->email);
                $stmt->execute();
                return true;
            }
            return false;
        }
    }

?>