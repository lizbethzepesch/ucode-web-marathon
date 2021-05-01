<?php
require ("Card.php");
require ("Player.php");

class Game {
    private $id_game;
    private $playerA;
    private $playerB;
    //private $db_connect;
    private $battlefield;
    private $deckOfCard = [];

function __construct($playerA, $playerB){
    $this->playerA = $playerA;
    $this->playerB = $playerB;
    
    //$this->db_connect = new DatabaseConnection();
}
public function getPlayerA(){
    return $this->playerA;   
}  
public function getPlayerB(){
    return $this->playerB;   
}    
public function startGame()
{
    $this->playerA->shakeCard();
    $this->playerB->shakeCard();
    for ($i=0; $i<3 ; $i++) { 
        $this->playerA->getCardFromDeck();
        $this->playerB->getCardFromDeck();
    }
    $this->playerA->yourTurn = 1;
    $this->playerB->yourTurn = 0;
    $this->startRound();
}
 
public function startRound()
{
    if ($this->playerA->getYourTurn() == 1 ) {
        $this->playerA->mana++;
        $this->playerA->getCardFromDeck();
    }
    else {
        $this->playerB->mana++;
        $this->playerB->getCardFromDeck();
    }

}

public function finishTurn()
{
    if ($this->playerA->getYourTurn() == 1 )
    {
        $this->playerA->yourTurn = 0;
        $this->playerB->yourTurn = 1;
    }
    else {
        $this->playerB->yourTurn = 0;
        $this->playerA->yourTurn = 1;
    }
    startRound();
}

function finishGame()
{
    

}



}
