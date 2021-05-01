<?php
class LLItem{
    public $data;
    public $next;

    public function __construct($data, $next = null) {
        $this->data = $data;
        $this->next = $next;
    }

    public function getData() {
        return $this->data;
    }

    public function getNext() {
        return $this->next;
    }

    public function setData($data) {
        $this->data = $data;
    }

    public function setNext($next) {
        $this->next = $next;
    }
    
}

?>