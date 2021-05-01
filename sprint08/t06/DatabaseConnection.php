<?php
class DatabaseConnection {
    public function __construct($host, $port, $username, $password, $database) {
        $this->connection = new mysqli($host, $username, $password, $database, $port);
    }
    public function __destruct() {
        $this->connection->close();
    }
    public function getConnectionStatus() : bool {
        $stat = $this->connection->get_connection_stats();
        if ($stat['connect_success'] == 1)
            return true; 
        else 
            return false;
    }
}


// $new = new DatabaseConnection('127.0.0.1', null, 'ykliuieva', "securepass", "ucode_web");
// echo $new->getConnectionStatus();


?>
