<?php

function get_anonymous($name, $alias, $affiliation){
    return new class($name, $alias, $affiliation) {

        private $name;
        private $alias;
        private $affiliation;

        public function __construct($name, $alias, $affiliation){
            $this->name = $name;
            $this->alias = $alias;
            $this->affiliation = $affiliation;
        }

        public function getName() {
            return $this->name;
        }

        public function getAlias(){
            return $this->alias;
        }

        public function getAffiliation() {
            return $this->affiliation;
        }
    };
}



// $mandarin = get_anonymous("Unknown", "Mandarin", "Ten Rings");
// print(implode("\n", array("name" => $mandarin->getName(),
// "alias" => $mandarin->getAlias(), "affiliation" => $mandarin->getAffiliation())));

?>