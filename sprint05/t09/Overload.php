<?php
class Overload{
    private $prop = array();

    public function __set($key, $value) {
        $this->prop[$key] = $value;
    }

    public function __get($key) {
        if (array_key_exists($key, $this->prop)) 
            return $this->prop[$key];
        
        return "NOT DATA";
    }

    public function __isset($key){
        if(!isset($this->prop[$key]))
            $this->prop[$key] = "NOT SET";
        return isset($this->prop[$key]);
    }

    public function __unset($key){
        unset($this->prop[$key]);
        $this->prop[$key] = NULL;
    }
}


// $overload = new Overload();
// $overload->mark_LXXXV = "INACTIVE";

// echo $overload->mark_LXXXV;
// echo "\n" . $overload->mark_LXXXVI;

// if (isset($overload->mark_LXXXVI))
//     echo "\n" . $overload->mark_LXXXVI;
// unset($overload->mark_IV);

// if ($overload->mark_IV == NULL)
//     echo "\nNULL\n";

?>