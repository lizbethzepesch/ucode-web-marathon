class Human{
    constructor(){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
        this.calories = calories
        document.getElementById("name").innerHTML = firstName + " " + this.lastName;
        document.getElementById("age").innerHTML = age;
        document.getElementById("gender").innerHTML = gender;
        document.getElementById("calories").innerHTML = calories;

        setInterval(() => this.hungry(), 60000);
    }

    hungry(){
        if(this.calories > 0)  {
            this.calories = this.calories - 200
        }
        document.getElementById("calories").innerHTML = this.calories;
    }
    sleepFor(){

    }

    feed(){

    }
}


class Superhero extends Human{
    fly(){

    }
    fightWithEvil(){

    }
    returnToPinkDiamond(){

    }
}


/* 
let firstName = prompt("enter the first name: ")
let lastName = prompt("enter the last name: ")
let gender = prompt("enter the gender: ")
let age = prompt("enter the age: ")


let untermensch = new Human() */