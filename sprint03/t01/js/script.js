String.prototype.removeDuplicates = function() {
    return this.replace(/\s+/g, ' ').trim();
}


/*
let str = "Giant Spiders? What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders? What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
*/