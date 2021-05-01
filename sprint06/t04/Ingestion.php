<?php

class Ingestion{
    public $day_of_diet;
    public $products;
    public function __construct($meal_type, $id){
        $this->id = $id;
        $this->meal_type = $meal_type;
    }

    public function get_from_fridge($product) {
        if($this->products[$product]->getKcal() > 200)
            throw new EatException("No more junk food, dumpling");
    }

    public function setProduct($obj) {
        $this->products[$obj->getName()] = $obj;
}
   public function getProducts()
   {
       return $this->products;
   }
}


?>