let cube1 = document.querySelector("div.cube1")

cube1.onmousedown = function(event) {
    //scube1.style = 'border: 2px dashed rgb(50, 50, 50)'
    let shiftX = event.clientX - cube1.getBoundingClientRect().left
    let shiftY = event.clientY - cube1.getBoundingClientRect().top
  
    cube1.style.position = 'absolute'
    cube1.style.zIndex = 1000
    document.body.append(cube1)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
        cube1.style.left = pageX - shiftX/2 + 'px'
        cube1.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube1.onmouseup = function() {
      document.removeEventListener('mousemove', mov)
      cube1.onmouseup = null
    }
    console.log(cube)
}
    
cube1.ondragstart = function() {
    return false
}

let cube2 = document.querySelector("div.cube2")

cube2.onmousedown = function(event) {

    let shiftX = event.clientX - cube2.getBoundingClientRect().left
    let shiftY = event.clientY - cube2.getBoundingClientRect().top
  
    cube2.style.position = 'absolute'
    cube2.style.zIndex = 1000
    document.body.append(cube2)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
        cube2.style.left = pageX - shiftX/2 + 'px'
        cube2.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube2.onmouseup = function() {
      document.removeEventListener('mousemove', mov)
      cube2.onmouseup = null
    }
}
    
cube2.ondragstart = function() {
    return false
}

let cube3 = document.querySelector("div.cube3")

cube3.onmousedown = function(event) {

    let shiftX = event.clientX - cube3.getBoundingClientRect().left
    let shiftY = event.clientY - cube3.getBoundingClientRect().top
  
    cube3.style.position = 'absolute'
    cube3.style.zIndex = 1000
    document.body.append(cube3)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
        cube3.style.left = pageX - shiftX/2 + 'px'
        cube3.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube3.onmouseup = function() {
      document.removeEventListener('mousemove', mov)
      cube3.onmouseup = null
    }
}
    
cube3.ondragstart = function() {
    return false
}

let cube4 = document.querySelector("div.cube4")

cube4.onmousedown = function(event) {

    let shiftX = event.clientX - cube4.getBoundingClientRect().left
    let shiftY = event.clientY - cube4.getBoundingClientRect().top
  
    cube4.style.position = 'absolute'
    cube4.style.zIndex = 1000
    document.body.append(cube4)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
        cube4.style.left = pageX - shiftX/2 + 'px'
        cube4.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube4.onmouseup = function() {
      document.removeEventListener('mousemove', mov)
      cube4.onmouseup = null
    }
}
    
cube4.ondragstart = function() {
    return false
}

let cube5 = document.querySelector("div.cube5")

cube5.onmousedown = function(event) {

    let shiftX = event.clientX - cube5.getBoundingClientRect().left
    let shiftY = event.clientY - cube5.getBoundingClientRect().top
  
    cube5.style.position = 'absolute'
    cube5.style.zIndex = 1000
    document.body.append(cube5)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
        cube5.style.left = pageX - shiftX/2 + 'px'
        cube5.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube5.onmouseup = function() {
      document.removeEventListener('mousemove', mov)
      cube5.onmouseup = null
    }
}
    
cube5.ondragstart = function() {
    return false
}

let cube6 = document.querySelector("div.cube6")

cube6.onmousedown = function(event) {
    
    let shiftX = event.clientX - cube6.getBoundingClientRect().left
    let shiftY = event.clientY - cube6.getBoundingClientRect().top
  
    cube6.style.position = 'absolute'
    cube6.style.zIndex = 1000
    document.body.append(cube6)
  
    moving(event.pageX, event.pageY)
  
    function moving(pageX, pageY) {
      cube6.style.left = pageX - shiftX/2 + 'px'
      cube6.style.top = pageY - shiftY/2 + 'px'
    }
  
    function mov(event) {
      moving(event.pageX, event.pageY)
    }
  
    document.addEventListener('mousemove', mov)
  
    cube6.onmouseup = function() {
        document.removeEventListener('mousemove', mov)
        cube6.onmouseup = null
    }
    
}
    
cube6.ondragstart = function() {
    return false
}