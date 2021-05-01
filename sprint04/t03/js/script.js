var index_of_sl = 1;


function nextSlide(n) {
  showSlides(index_of_sl += n);
}

function prevSlide(n) {
  showSlides(index_of_sl += 2*n);
}

function showSlides(n) {
    let i
    index_of_sl++
    let slides = document.getElementsByClassName("slide")
    
    if (n > slides.length) index_of_sl = 1 
    if (n < 1) index_of_sl = slides.length

    for (i of slides) {
        i.style.display = "none";  
    }

    slides[index_of_sl - 1].style.display = "block";  
    console.log(index_of_sl)
}

setInterval(showSlides, 3000)
