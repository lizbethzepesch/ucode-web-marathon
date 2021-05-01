<?php
class Player
{
  public $id;
  public $socket;
  public $username;
  public $hero;
  public  $yourTurn;
  public $cardHand = [];
  public $userDeck =[];
  public $cardInField = [];
  public $health;
  public $mana;
  public $img;
  function __construct($id, $socket = NULL, $username, $hero = NULL, $img = NULL,$cardHand =[])
  {
    $this->id = $id;
    $this->socket = $socket;
    $this->username = $username;
    $this->hero = $hero;
    $this->cardHand = $cardHand;
    $this->img = $img;
    $this->health = 20;
    $this->mana = 1;
  }
  public function UserDeckToArray(){
    $arr =[];
    foreach($this->userDeck as $value){
      array_push($arr,$value->getCardData());
    }
    return $arr;
  }
  public function CardHandToArray(){
    $arr =[];
    foreach($this->cardHand as $value){
      array_push($arr,$value->getCardData());
    }
    return $arr;
  }
  public function CardInFieldToArray(){
    $arr =[];
    foreach($this->cardInField as $value){
      array_push($arr,$value->getCardData());
    }
    return $arr;
  }
  public function getUserData(){
    return array(
      "id" => $this->id,
      "username" => $this->username,
      "hero" => $this->hero,
      "img" => $this->img,
      "mana" => $this->mana,
      "health" => $this->health,
      "yourTurn" => $this->yourTurn,
      "cardHand" => self::CardHandToArray(),
      "UserDeck" => self::UserDeckToArray(),
      "cardInField" => self::CardInFieldToArray()
    );
  }
  public function getId(){
    return $this->id;
  }
  public function getSocket(){
    return $this->socket;
  }
  public function getUsername(){
    return $this->username;
  }
  public function getHero(){
    return $this->hero;
  }
  public function getYourTurn(){
    return $this->yourTurn;
  }
  public function getCardHand(){
    return $this->cardHand;
  }
  public function getUserDeck(){
    return $this->userDeck;
  }
  public function getHealth(){
    return $this->health;
  }
  public function getMana(){
    return $this->mana;
  }
  public function getImg(){
    return $this->img;
  }
  public function setSocket($socket){
    return $this->socket = $socket;
  }
  public function setUsername($username){
    return $this->username = $username;
  }
  public function setHero($hero){
    return $this->hero = $hero;
  }
  public function setCardHand($cardHand){
    return $this->cardHand = $cardHand;
  }
  public function setUserDeck($userDeck){
    return $this->userDeck = $userDeck;
  }
  public function setImg($img){
    return $this->img = $img;
  }
  public function setMana($mana){
    return $this->mana = $mana;
  }
  public function addMana(){$this->mana++;}

  public function getCardInField(){
    return $this->cardInField;
  }

  public function RemoveCard($Card)
  {
    $key = array_search($Card, $this->cardInField);
    unset($this->cardInField[$key]);
  }

  public function AddCardToField($Card)
  {
    $this->cardInField[] = $Card;
    $key = array_search($Card, $this->cardHand);
    unset($this->cardHand[$key]);
  }

  public function getCardFromDeck()
  {
    $this->cardHand[] = array_shift($this->userDeck);
  }

  public function shakeCard()
  {
    shuffle($this->userDeck); 
  }
  public function addCardToDeck($card){
    array_push($this->userDeck,$card);
  }
}
