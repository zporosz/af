//This code from w3schools - ford the slideshow

var slideIndexNatural = 1;
showSlidesNatural(slideIndexNatural);

// Next/previous controls
function plusSlidesNatural(nNatural) {
  showSlidesNatural(slideIndexNatural += nNatural);
}

// Thumbnail image controls
function currentSlideNatural(nNatural) {
  showSlidesNatural(slideIndexNatural = nNatural);
}

function showSlidesNatural(nNatural) {
  var i;
  var slides = document.getElementsByClassName("mySlidesNatural");
  //var dots = document.getElementsByClassName("dot");
  if (nNatural > slides.length) {slideIndexNatural = 1} 
  if (nNatural < 1) {slideIndexNatural = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndexNatural-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}