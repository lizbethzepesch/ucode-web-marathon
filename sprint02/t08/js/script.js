function checkBrackets(str){

    if(str){
        if(str == null || str == true || str == false || str >= 15){
            return -1
        }
        for(let n = 0; n < str.length; n++){
            for(let i = 0; i < str.length; i++){
                if(str[i] == '('){
                    for(let j = i + 1; j < str.length; j++){
                        if(str[j] == ')'){
                            str = str.slice(0, j) + str.slice(j + 1)
                            str = str.slice(0, i) + str.slice(i + 1)
                            
                            console.log(str)
                            break
                        }
                    }
                }
            }
        }
        let res = 0
        for (let i = 0; i < str.length; i++){
            if(str[i] == "(" || str[i] == ")"){
                res++
            }
        }
        return res
    }
    else{
        return -1;
    }
}