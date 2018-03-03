//This code from w3schools - ford the slideshow

var slideIndexBp = 1;
showSlidesBp(slideIndexBp);

// Next/previous controls
function plusSlidesBp(nBp) {
  showSlidesBp(slideIndexBp += nBp);
}

// Thumbnail image controls
function currentSlideBp(nBp) {
  showSlidesBp(slideIndexBp = nBp);
}

function showSlidesBp(nBp) {
  var i;
  var slides = document.getElementsByClassName("mySlidesBp");
  //var dots = document.getElementsByClassName("dot");
  if (nBp > slides.length) {slideIndexBp = 1} 
  if (nBp < 1) {slideIndexBp = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndexBp-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}