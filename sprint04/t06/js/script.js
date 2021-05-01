let imgs = 0
let img = document.getElementsByTagName('img')
let mess = document.getElementById('mess')

let show = new IntersectionObserver(function(entries){

    for(let i of entries){
        if(i.intersectionRatio > 0){
            if(i.target.getAttribute('showed') === 'false'){
                imgs++
                let message = imgs + ' images loaded from 20'
                console.log(mess)
                i.target.setAttribute('showed', 'true')
                mess.textContent = message

                if(imgs === 20){
                    mess.style.background = 'green'
                    setTimeout(function() {mess.style = 'display: none'}, 3000);
                }

                i.target.src = i.target.getAttribute('data-src')
            }
        }
    }
})

for(let i = 0; i < img.length; i++){
    img[i].setAttribute('showed', 'false')
    img[i].setAttribute('id', 'id' + i)
    show.observe(img[i])
}