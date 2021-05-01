<?php

class Card
{
  private $id;
  private $attack;
  private $defence;
  private $cost;
  private $frontImg;
  private $backImg;
  private $Player;

  function __construct($id, $attack, $defence, $cost, $Player, $frontImg = null, $backImg = null)
  {
    $this->id = $id;
    $this->attack = $attack;
    $this->defence = $defence;
    $this->cost = $cost;
    $this->Player = $Player;
    $this->frontImg = $frontImg;
    $this->backImg = $backImg;
    $this->isAlive = 1;
  }
  public function getCardData(){
    return array(
      "id" => $this->id,
      "attack" => $this->attack,
      "defence" => $this->defence,
      "cost" => $this->cost,
      "frontImg" => $this->frontImg,
      "backImg" => $this->backImg
    );
  }
  public function getId(){
    return $this->id;
  }
  public function getAttack(){
    return $this->attack;
  }
  public function getDefence(){
    return $this->defence;
  }
  public function getCost(){
    return $this->cost;
  }
  public function getfrontImg(){
    return $this->frontImg;
  }
 

  public function setDefence($defence){
    $this->defence = $defence;
  }
  public function setfrontImg($frontImg){
    $this->frontImg = $frontImg;
  }
  public function Damage($Damage)
  {
    $this->defence -= $Damage;
    if ($this->getDefence()<= 0)
    {
      $this->Deth();
    }
  }
  public function Attack($DamgeCharacter)
  {
    $DamageCharacter->Damage(getAttack());
  }
  public function Deth()
  {
    $this->Player->RemoveCard($this);
  }


}
