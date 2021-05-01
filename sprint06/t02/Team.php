<?php

// class Avenger{
//     public $name;
//     public $alias;
//     public $gender;
//     public $age;
//     public array $power;
//     public $hp;

//     public function __construct($name, $alias, $gender, $age, $power, $hp) {
//         $this->name = $name;
//         $this->alias = $alias;
//         $this->gender = $gender;
//         $this->age = $age;
//         $this->power = $power;        
//         $this->hp = $hp;        
//     }

//     public function __invoke(){
//         echo strtoupper($this->alias) . "\n";
//         foreach($this->power as $i)
//             echo $i . "\n";
//         echo $this->hp . "\n";
//     }

//     public function __toString() {
//         $res = 'name: ' . $this->name . "\n" . 'gender: ' . $this->gender . "\n" . 'age: ' . $this->age . "\n";
//         return $res;
//     }
// }


class Team{
    public $id;
    public array $avengers;

    public function __construct($id, $avengers) {
        $this->id = $id;
        $this->avengers = $avengers;
    }

    public function battle($damage) : void{
        foreach ($this->avengers as $avenger)
            $avenger->hp -= $damage;       
    }

    public function calculate_losses($cloned_team) : void{
        $avs = 0;
        foreach ($this->avengers as $avenger)
            if($avenger->hp <= 0) $avs++;
        
        if(!$avs) echo "We haven't lost anyone in this battle!";
        else echo "In this battle we lost " . $avs . "Avenger(s).";
    }

}

// $arr = array();

// $arr[0] = new Avenger("Tony Stark", "Iron Man", "man", 38,
// ["intelligence", "durability", "magnetism"], 120);

// $arr[1] = new Avenger("Natasha Romanoff", "Black Widow", "woman", 35,
// ["agility", "martial arts"], 75);

// $arr[2] = new Avenger("Carol Danvers", "Captain Marvel", "woman", 27,
// ["durability", "flight", "interstellar travel"], 95);

// $team = new Team(1, $arr);

// echo "Battle 1\n";
// $cloned_team = clone $team;
// $damage = 25;
// $team->battle($damage);
// $team->calculate_losses($cloned_team);

// echo "\nBattle 2\n";
// $cloned_team = clone $team;
// $damage = 80;
// $team->battle($damage);
// $team->calculate_losses($cloned_team);

?>