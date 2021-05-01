
document.querySelector("main").insertAdjacentHTML("beforeend", "<table></table>")
document.querySelector("table").insertAdjacentHTML("beforeend", "<th class=\"Name\">Name</th><th class=\"Strenght\">Strenght</th><th class=\"Age\">Age</th>")

let data = new Map() 

data.set(0 ,['Black Panther', 66, 53])
data.set(1 ,['Captain America', 79, 137])
data.set(2 ,['Captain Marvel', 97, 26])
data.set(3 ,['Hulk', 80, 49])
data.set(4 ,['Iron Man', 88, 48])
data.set(5 ,['Spider-Man', 78, 16])
data.set(6 ,['Thanos', 99, 1000])
data.set(7 ,['Thor', 95, 1000])
data.set(8 ,['Yon-Rogg', 73, 52])

for(let i of data){
    document.querySelector("tbody").insertAdjacentHTML("beforeend", "<tr><td>" + i[1][0] + "</td>" +  "<td>" + i[1][1] + "</td>" + "<td>" + i[1][2] + "</td></tr>")
}

document.querySelector("main").insertAdjacentHTML("beforeend", "<label>Sorting by __, order: __</label>")

const name_but = document.querySelector('.Name')
let name_asc = false
const strenght_but = document.querySelector('.Strenght')
let strenght_asc = false
const age_but = document.querySelector('.Age')  
let age_asc = false

name_but.addEventListener('click', event =>{
    if(!name_asc){


        for (i of document.querySelectorAll("td"))
            i.textContent = "happh"
        document.querySelector("main").insertAdjacentHTML("beforeend", "<label>Sorting by Name, order: ASC</label>")
        name_asc = true
    }
    else{

    }
})




console.log(document.querySelector("main")) 