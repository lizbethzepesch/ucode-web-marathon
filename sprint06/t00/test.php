<?php

/*
Task 00 (test.php)
Task name: LinkedList
*/

function autoload($pClassName)
{
    include(__DIR__ . "/" . $pClassName . ".php");
}

spl_autoload_register("autoload");

$list = new LList();
$list->addArr([100, 1, 2, 3, 100, 4, 5, 100]);
echo $list->toString() . "\n";

$list->removeAll(100);
echo $list->toString() . "\n";

$list->add(1340);
echo $list->toString() . "\n";
$list->add(1344);

echo $list->count() . "\n"; // 1
echo $list->contains(100) . "\n"; // 1
echo $list->toString() . "\n"; // 1, 2, 3, 4, 5, 10

$sum = 0;
$iter = $list->getIterator();
// foreach ($iter as $v)
//     $sum += $v;
// echo "$sum\n"; // 25

$list->clear();
echo $list->toString() . "\n";

?>