function f(){
    let res = 1
    while(1){
        let num = prompt("Previous result: " + res + ". Enter a new number:")

        if(isNaN(num)){
            console.error(`Invalid number!`)
            alert(`Invalid number!`)
        }
        else {
            console.log
            if(Number(num) == 12345)
                break

            if(Number(num) > 10000 || res + Number(num) > 10000) 
                res = 1
            else
                res += Number(num)
        }
    } 
}


// input th 12345 to leave the cycle

f()