let begin = prompt("write a number of beginning")
let end = prompt("write a number of ending")

if(begin.length == 0){
    begin = 1
}

if(end.length == 0){
    end = 101
}

for(; begin <= end; begin++){
    let res = begin
    let check = 0

    if(begin % 2 == 0){
        if(check == 0){
            res += " is "
        }
       res += "even"
       check = 1
    }

    if(begin % 3 == 0){
        if(check == 0){
            res += " is "
        }
        if(check){
            res += ", "
        }
        res += "a multiple of 3"
    }

    if(begin % 10 == 0){
        if(check == 0){
            res += " is "
        }
        if(check){
            res += ", "
        }
    res += "a multiple of 10"
    }

    console.log(res)
}