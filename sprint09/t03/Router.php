<?php

class Router{
     public function __construct()
     {
         foreach($_GET as $key => $value)
            $this->params[$key] = $value;
     }

    public function print_params(){
        $res = '';
        foreach($this->params as $key => $value){
            if($res){
                $res .= ", ";
            }
            $res .= "'" . $key . "': " . "'" . $value . "'";
        }
        $res = '{' . $res . '}';
        return $res;
    }

}

?>