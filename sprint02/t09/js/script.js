function getFormattedDate(dateObject){
    let str = ""
    if(dateObject.getDate() < 10){
        str += "0"
    }

    str += dateObject.getDate()
    str += "."
    if(dateObject.getMonth() < 10){
        str += "0"
    }
    str += (dateObject.getMonth() + 1)
    str += "."
    str += dateObject.getFullYear()
    str += " "

    if(dateObject.getHours() < 10){
        str += "0"
    }
    str += dateObject.getHours()
    str += ":"
    if(dateObject.getMinutes() < 10){
        str += "0"
    }
    str += dateObject.getMinutes()
            
    str += " "

    let day = dateObject.getDay()
    switch(day){
        
        case 0:
            str += " Sunday"
            break
        case 1:
            str += " Monday"
            break
        case 2:
            str += " Tuesday"
            break
        case 3:
            str += " Wednesday"
            break
        case 4:
            str += " Thursday"
            break
        case 5:
            str += " Friday"
            break
        case 6:
            str += " Saturday"
            break
    }
    return str
}
