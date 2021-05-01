<?php
class LList implements IteratorAggregate{
    private $head;
    public function getFirst(){
        return $this->head->getData();
    }

    public function getLast(){
        $current = $this->head;
        for(; $current->getNext() !== NULL;)
            $current = $current->getNext();
        return $current;
    }

    public function add($value){
        $current = $this->head;
        $new = new LLItem($value);
        if(!$current){
            $this->head = $new;
            return;
        }
        for(; $current->getNext();)
            $current = $current->getNext();
        
        $current->setNext($new);

    }

    function addArr($arr) {
        foreach($arr as $i => $v) 
            $this->add($v);
    }

    function remove($value) {
        error_reporting(0);
        if($this->getFirst() == $value) {
            $this->head = $this->head->next;
            return 1;
        }

        $cur = $this->head;
        while($cur->next->data != $value && $cur) {
            $cur = $cur->next;
        }

        if($cur->next->data == $value) {
            $cur->next = $cur->next->next;
            return 1;
        }
        return 0;
    }

    function removeAll($value) {
        while($this->remove($value) == 1) {}
        return 0;
    }
    

    public function contains($value){
        $current = $this->head;
        for(;$current->getNext() !== NULL;) {
            if($current->getData() === $value){
                return 1;
            }
            $current = $current->getNext();
        }
        return 0;
    }

    public function clear(){
        $this->head = NULL;
    }

    public function count(){
        $counter = 0;
        $current = $this->head;
        for(;$current->getNext() !== NULL; $counter++) 
            $current = $current->getNext();
        return $counter;
    }

    public function toString(){
        $res = '';

        if($this->head === NULL)
            return $res;

        $current = $this->head;

        $res .= $current->getData();
        $current = $current->getNext();
        for(;$current->getNext() !== NULL; $current = $current->getNext()) 
            $res .=  ', ' .$current->getData();
        $res .=  ', ' .$current->getData();
        return $res;
    }

    public function getIterator() {
        for($current = $this->head; $current != null; $current = $current->getNext())
            yield $current->getData();
    }
}
?>
