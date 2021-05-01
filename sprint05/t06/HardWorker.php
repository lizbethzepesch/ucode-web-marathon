<?php

class HardWorker{
    private $name;
    private $age;
    private $salary;

    public function setName($str){
        $this->name = $str;
    }

    public function getName(){
        return $this->name;
    }

    public function setAge($a){
        if($a > 100 || $a < 1)
            return false;
        $this->age = $a;
        return true;
    }

    public function getAge($str){
        return $this->age;
    }

    public function setSalary($s){
        if($s > 10000 || $s < 100)
            return false;
        $this->salary = $s;
        return true;
    }

    public function getSalary($salary){
        return $this->salary;
    }

    public function toArray(){
        $array = array(
            'name' => $this->name,
            'age' => $this->age,
            'salary' => $this->salary,
        );
        return $array;
        
    }
}

// $Bruce = new HardWorker();
// $Bruce->setName("Bruce");
// echo $Bruce->getName() . "\n";
// $Bruce->setAge(50);
// $Bruce->setSalary(1500);
// print_r ($Bruce->toArray());
// $Bruce->setName("Linda");
// $Bruce->setAge(140);
// print_r ($Bruce->toArray());
?>