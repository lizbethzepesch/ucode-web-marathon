 function concat(string1, string2){
    func.count = 0;

    function func(){
        func.count++
        let str2 = prompt("Write a second string")
        if (str2 === null) 
            return string1
        else
            return string1 += ' ' + str2
    }    
    
    if (string2 === undefined)
        return func
    else 
        return string1 += " " + string2
    
} 

