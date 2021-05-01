function transformation(){
    if(document.getElementById("hero").textContent == "Bruce Banner"){
        document.getElementById("lab").style = "background: #70964b" 
        document.getElementById("hero").style = "font-size: 130px" 
        document.getElementById("hero").innerHTML = "Hulk" 
    }
    else{
        document.getElementById("lab").style = "" 
        document.getElementById("hero").style = "" 
        document.getElementById("hero").innerHTML = "Bruce Banner" 
    }
}