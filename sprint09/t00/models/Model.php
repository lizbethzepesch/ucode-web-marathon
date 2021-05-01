<?php

abstract class Model {
    protected $connection;
    protected $db;
    protected $table;

    protected function __construct($table_name){
        $this->table = $table_name;
        $this->setConnection();
    }
    // abstract protected function setTable();

    public function setConnection() {
        $this->db = new DatabaseConnection(
            '127.0.0.1', 
            NULL, 
            'ykliuieva', 
            'securepass', 
            'sword'
        );
        $this->connection = $this->db->connection;
    }

    function setTable($table) {
        $this->table = $table;
    }
    abstract protected function save();
}

?>
