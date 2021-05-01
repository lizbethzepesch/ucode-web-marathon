let arr = ''
let num = 0
let height = 2


add.onclick = function(){
    
    const timeElapsed = Date.now();
    const date = new Date(timeElapsed);

    let text = document.getElementById('inp')
    let paragraph = document.getElementById('history')
    if(num){ 
        paragraph.style = 'height: ' + height + 'em;'
        paragraph.insertAdjacentHTML("beforeend", "<br>")
    }


    let date_text = ' [' + date.getDate() + '.' + date.getMonth() + '.' 
                    + date.getFullYear() + ', ' + date.getHours() + ':' 
                    + date.getMinutes() + ':' + date.getSeconds() + ']'

    paragraph.insertAdjacentHTML("beforeend", text.value + date_text)

    num ++
    height += 1.2
 
}

clear.onclick = function(){
    document.querySelector('#history').remove()
    document.querySelector('div.history').insertAdjacentHTML("beforeend", "<label id=\"history\"></label>")
    num = 0
    height = 2
}



