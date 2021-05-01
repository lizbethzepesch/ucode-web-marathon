let houseMixin = {
    wordReplace(fromReplace, toReplace) {

        let indx = this.description.indexOf(fromReplace)
        let len = fromReplace.length
        this.description = this.description.slice(0, indx) + toReplace + " " + this.description.slice(indx + len +1)
           
        return this.description
    },

    wordInsertAfter(orig, add) {
        let indx = this.description.indexOf(orig)
        this.description = this.description.slice(0, indx) + add + " " + this.description.slice(indx +1)
           
        return this.description

    },

    wordDelete(toRemove) {
        let remove = toRemove.split(" ")        

        for(let i in remove){     
            if(remove[i]){
                let indx = this.description.indexOf(remove[i])
                let len = remove[i].length
                this.description = this.description.slice(0, indx) + this.description.slice(indx + len +1)
            }
        }
        return this.description
    }, 

    wordEncrypt(){
        for (letter in this.description){
            const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
            this.description = this.description.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
        }
        return this.description
    },

    wordDecrypt() {
        for (letter in this.description){
            const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
            this.description = this.description.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
        }
        return this.description
    }    
}


/*
const house = new HouseBuilder('88 Crescent Avenue',
'Spacious town house with wood flooring, 2-car garage, and a back patio.',
'J. Smith', 110, 5);
Object.assign(house, houseMixin);
console.log(house.getDaysToBuild());
// 220
console.log(house.description);
// Spacious town house with wood flooring, 2-car garage, and a back patio.
house.wordReplace("wood", "tile");
console.log(house.description);
// Spacious town house with tile flooring, 2-car garage, and a back patio.
house.wordDelete("town ");
console.log(house.description);
// Spacious house with tile flooring, 2-car garage, and a back patio.
house.wordInsertAfter ("with", "marble");
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
house.wordEncrypt();
console.log(house.description);
// Fcnpvbhf ubhfr jvgu zneoyr gvyr sybbevat, 2-pne tnentr, naq n onpx cngvb.
house.wordDecrypt();
console.log(house.description);
// Spacious house with marble tile flooring, 2-car garage, and a back patio.
*/