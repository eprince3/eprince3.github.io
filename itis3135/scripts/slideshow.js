
var container = $('#slideshow');
var currentIndex = -1;

function changeSlide(){
    container + $('img.slides').eq(currentIndex).fadeOut(10);
}