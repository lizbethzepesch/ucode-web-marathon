function addWords(obj, wrds){
    wrds = wrds.replace(/\s+/g, ' ').trim()
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    
    let add = wrds.split(' ')

    for(let i in add){
        if(add[i].search(obj.words)){
            obj.words += " " + add[i]
        }
    }
    let words = Array.from(new Set(obj.words.split(' ')))
    obj.words = ""
    for(let i in words){
        obj.words += words[i] + " "
    }
    obj.words = obj.words.slice(0, -1)
    return obj.words;
}


function removeWords(obj, wrds) {
    wrds = wrds.replace(/\s+/g, ' ').trim()
    obj.words = obj.words.replace(/\s+/g, ' ').trim()

    let remove = wrds.split(' ')
    let words = obj.words.split(' ')

    
    for(let i in remove){     
        let indx = words.indexOf(remove[i])

        words = words.slice(0, indx) + words.slice(indx + 1)
        words = words.split(",")
    }
    
    obj.words = ""
    for(let i in words){
        obj.words += words[i] + " "
    }
    obj.words = obj.words.slice(0, -1) 
    return obj.words;

} 

function changeWords(obj, oldWrds, newWrds){
    oldWrds = oldWrds.replace(/\s+/g, ' ').trim()
    newWrds = newWrds.replace(/\s+/g, ' ').trim()
    obj.words = obj.words.replace(/\s+/g, ' ').trim()

    let change = oldWrds.split(' ')
    let words = obj.words.split(" ")
    
    for(let i in change) {

        if(words.includes(change[i])){

            let indx = words.indexOf(change[i])

            words = words.slice(0, indx) + "," + newWrds + "," + words.slice(indx +1)
            
            words = words.split(",")
        }
    }
    

    obj.words = ""
    for(let i in words){
        if(words[i] && !obj.words.includes(words[i]))
            obj.words += words[i] + " "
    }
    obj.words = obj.words.slice(0, -1).trim()
    return obj.words;

}

