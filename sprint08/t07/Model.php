<?php

abstract class Model {
    protected $connection;
    protected $db;

    public function __construct($table) {
        $this->setConnection();
        $this->setTable($table);
    }

    public function setTable($table) {
        $this->table = $table;
    }

    public function setConnection() {
        $this->db = new DatabaseConnection("127.0.0.1", null, "ykliuieva", "securepass", "ucode_web");
        $this->connection = $this->db->connection;
    }

    abstract protected function find($id);
    abstract protected function delete();
    abstract protected function save();
}



?>