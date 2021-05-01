<?php

require_once(__DIR__ . "/Building.php");

class Tower extends Building{
    private bool $elevator;
    private int $arc_capacity;
    private float $height;

    public function setElevator($is){
        $this->elevator = $is;
    }
    public function hasElevator(): bool{
        return $this->elevator;
    }

    public function setArcCapacity($data){
        $this->arc_capacity = $data;
    }
    public function getArcCapacity(): int {
        return $this->arc_capacity;
    }

    public function setHeight($data){
        $this->height = $data;
    }
    public function getHeight(): float{
        return $this->height;
    }

    public function getFloorHeight(): float {
        return $this->getHeight() / $this->getFloors();
    }

    public function toString(): string {
        $props = ["Floors : " . $this->floors,
            "Material : " . $this->material,
            "Address : " . $this->address,
            "Elevator : " . $this->elevator,
            "Arc_capacity : " . $this->arc_capacity,
            "Height : " . $this->height,
            "Floor height : " . $this->getFloorHeight(),
        ];

        $str = "";

        foreach ($props as $p)
            $str = $str . $p . "\n";
        return $str;
    }
}

// $StarkTower = new Tower(93, "Different", "Manhattan, NY");
// $StarkTower->setElevator(true);
// $StarkTower->setArcCapacity(70);
// $StarkTower->setHeight(1130);
// echo $StarkTower->toString();

?>