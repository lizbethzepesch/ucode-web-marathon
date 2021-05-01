var coinCollection = new Set();
var menu = new Map();
var guestList = new WeakSet();
var bankVault = new WeakMap();


/*   menu   */

menu.set('borschtsch', 10000);
menu.set('warenyky', 23485);
menu.set('cake', 923784);
menu.set('tea', 827346);
menu.set('coffee', 456);
menu.set('porridge', 1);

console.log("menu.size: " + menu.size)
console.log("menu: " + menu)

console.log("menu.get('borschtsch'): " + menu.get('borschtsch'))
console.log("menu.get('cake'): " + menu.get('cake'))

menu.forEach(function(value, key) {
    console.log(`${key} => ${value}`);
});

console.log("menu.delete('coffee'): " + menu.delete('coffee'))
menu.forEach(function(value, key) {
    console.log(`${key} => ${value}`);
});


console.log("menu.keys().next().value: " + menu.keys().next().value)


for(i of menu){
    menu.delete(i)
}


console.log("menu: " + menu)

/*   coinCollection   */

coinCollection.add(1)
coinCollection.add(5)
coinCollection.add(25)
coinCollection.add(100)

console.log("coinCollection.has(1): " + coinCollection.has(1))
console.log("coinCollection.has(4): " + coinCollection.has(4))

for (let i of coinCollection){
    console.log("item: " + i)
}

console.log("coinCollection.delete(5): " + coinCollection.delete(5))

for (let i of coinCollection){
    console.log("item: " + i)
}
for (let i of coinCollection){
    coinCollection.delete(i)
}

console.log(coinCollection)

/*   guestList   */

var slavik = new WeakSet();
var sascha = new WeakSet();
var jana = new WeakSet();
var kolja = new WeakSet();
var pascha = new WeakSet();

guestList.add(slavik)
guestList.add(sascha)
guestList.add(jana)
guestList.add(kolja)
guestList.add(pascha)

console.log(guestList)

console.log("guestList.has(pascha): " + guestList.has(pascha))

console.log("guestList.delete(kolja): " + guestList.delete(kolja))



/*   bankVault   */
var q1 = new WeakMap();
var q2 = new WeakMap();
var q3 = new WeakMap();
var q4 = new WeakMap();
var q5 = new WeakMap();

bankVault.set(q2, "jhskdfjs")
bankVault.set(q3, "fgsdf")
bankVault.set(q1, "sdfgd")
bankVault.set(q4, "erihuedsfg")
bankVault.set(q5, "wehterhr")

console.log(bankVault)

console.log("bankVault.has(q4): " + bankVault.has(q4))
console.log("bankVault.get(q4): " + bankVault.get(q4))
console.log("bankVault.get(q1): " + bankVault.get(q1))

console.log("bankVault.delete(q2): " + bankVault.delete(q2))
