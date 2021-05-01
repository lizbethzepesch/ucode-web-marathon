<?php


include "ControllerInterface.php";


class Main implements ControllerInterface{
    public function __construct(){
        $this->view = new View('/Users/ykliuieva/ykliuieva/t05/view/templates/main.html');
    }

    public function execute(){
        $this->view->render();
    }
}


?>