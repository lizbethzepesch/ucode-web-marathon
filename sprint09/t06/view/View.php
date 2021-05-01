<?php

class View{

    public function __construct($url)
    {
        $this->url = $url;
    }


    public function render(){
        ob_clean();
        echo file_get_contents($this->url);
    }
}

?>