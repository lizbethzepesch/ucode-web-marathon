function hero(){
    let animal = prompt('What animal is the superhero most similar to?');

    if((animal.length > 20 || animal.length < 1) || !/[a-zA-Z]/.test(animal)) {
        alert('Animal is incorrect!')
        return
    }

    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');

    if(!/^male$|^female$|^$/i.test(gender)) {
        alert('Gender is incorrect!')
        return
    } 

    let age = prompt('How old is the superhero?');

    if(!(/^[0-9]/.test(age)) || age < 1 || age.length > 5) {
        alert('Age is incorrect!')
        return
    } 

    let description = "The superhero name is: "
    description += animal


    if(age < 18){
        if(/^female$/i.test(gender)){
            description += "-girl"
        }else 
        if(/^male$/i.test(gender)){
            description += "-boy"
        }else 
        
        if(/^$/i.test(gender)){
            description += "-kid"
        }
    }
    else{
        if(/^female$/i.test(gender)){
            description += "-woman"
        }else 
        if(/^male$/i.test(gender)){
            description += "-man"
        }else 
        
        if(/^$/i.test(gender)){
            description += "-hero"
        }
    }

    alert(description + "!")
}

hero()