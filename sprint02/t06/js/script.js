let name_ = prompt("write your first name")
let vorname_ = prompt("write your first name")
 
name = name_.charAt(0).toUpperCase() + name_.slice(1)
vorname = vorname_.charAt(0).toUpperCase() + vorname_.slice(1)

console.log("Hello " + name + " " + vorname + "!")
alert("Hello " + name + " " + vorname + "!")


for (let i = 0; i < name.length; i++) {
    if(!((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || 
    (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122))){
        console.log("Wrong input!")
        alert("Wrong input!")
        break
    }
    if(!((vorname.charCodeAt(i) >= 65 && vorname.charCodeAt(i) <= 90) || 
    (vorname.charCodeAt(i) >= 97 && vorname.charCodeAt(i) <= 122))){
        console.log("Wrong input!")
        alert("Wrong input!")
        break
    }
}