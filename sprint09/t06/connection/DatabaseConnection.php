<?php

class DatabaseConnection {
    public $connection;

    public function __construct($host, $port, $username, $password, $database) {
        $this->connection = new PDO("mysql:host=$host;dbname=$database", $username, $password);
        $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected successfully";
    }
    public function __destruct() {
        $this->connection = null;
    }
    public function getConnectionStatus() {
        if (isset($this->connection)) {
            return true;
        }
        return false;
    }
}

?>