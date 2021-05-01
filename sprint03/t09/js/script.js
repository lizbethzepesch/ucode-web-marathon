let validator = {
    set: function (obj, property, value) {
        if (property === 'age') {
            if (!Number.isInteger(value)) {
                console.log('Uncaught TypeError: The age is not an integer');
                return false
            }
            if (value > 200 || value < 0) {
                console.log('Uncaught RangeError: The age is invalid');
                return false
            }
        }
        
        console.log('Setting value \'' + value + '\' to \'' + property + '\'')
        obj[property] = value;
    },

    get: function(target, property){
        console.log('Trying to access the property ' + property + '...');
        return property in target ? target[property] : false;
    }
};

let person = new Proxy({}, validator);
person.age = 100;
// Setting value '100' to 'age'
console.log(person.age);
// Trying to access the property 'age'...
// 100
person.gender = "male";
// Setting value 'male' to 'gender'
person.age = 'young';
// Uncaught TypeError: The age is not an integer
person.age = 300;
// Uncaught RangeError: The age is invalid
