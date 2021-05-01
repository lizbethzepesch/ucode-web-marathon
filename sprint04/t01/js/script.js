document.querySelector("li:not(.good, .evil)").classList.add("unknown")
let li = document.querySelectorAll("li")

for(let i of li){
    if(!i.hasAttribute("data-element")) i.setAttribute('data-element', 'none')
}

let li_div = document.querySelectorAll("li")

for(let i = 0; i < li_div.length; i++){
    let l = li_div[i].getAttribute('data-element').split(" ")
    li_div[i].insertAdjacentHTML("beforeend", "<br>")
    for(let j of l){
        li_div[i].insertAdjacentHTML("beforeend", "<div class=\"elem " + j + "\"></div>")   
    }
    
}
let div = document.querySelectorAll("div")

for(let i of div){
    console.log(i)
    if(i.classList.contains("none")) i.insertAdjacentHTML("beforeend", "<div class=\"line\"></div>")  
}