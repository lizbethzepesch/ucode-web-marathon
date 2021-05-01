<?php



class Heroes extends Model {
    public $id;
    public $name;
    public $description;
    public $race;
    public $class_role;

    public function __construct() {
        parent::__construct("heroes");
    }

    public function find($id) {
        if (!$this->db->getConnectionStatus()) 
            return [];

        $data = $this->connection->query("SELECT * FROM $this->table WHERE id = $id;");
        $data = $data->fetch_all()[0];

        $this->id = $data[0];
        $this->name = $data[1];
        $this->description = $data[2];
        $this->race = $data[3];
        $this->class_role = $data[4];

        return $data;
    }
    
    public function delete() {
        if (!$this->db->getConnectionStatus()) 
            return false;
        
        $data = $this->connection->query("SELECT * FROM $this->table WHERE id = $this->id;");
        $data = $data->fetch_all();

        if (empty($data)) 
            return false;
        
        $this->connection->query("DELETE FROM $this->table WHERE id = $this->id;");

        return true;
    }

    public function save(){
        if (!$this->db->getConnectionStatus())
            return false;
            
        $data = $this->connection->query("SELECT * FROM $this->table WHERE id = $this->id;");
        $data = $data->fetch_all();

        empty($data) ? $this->connection->query("INSERT INTO $this->table (name, description, race, class_role) VALUE ('$this->name', '$this->description', '$this->race', '$this->class_role');")
        : $this->connection->query("UPDATE $this->table SET name='$this->name', description='$this->description', race='$this->race', class_role='$this->class_role' WHERE id = $this->id;");
        

        return true;
    }
}

?>