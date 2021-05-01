function copyObj(obj){
    let res = new Object()
    for(var i in obj) {
        res[i] = obj[i];
    }
    return res
}