//This code from w3schools - ford the slideshow

var slideIndexBirds = 1;
showSlidesBirds(slideIndexBirds);

// Next/previous controls
function plusSlidesBirds(nBirds) {
  showSlidesBirds(slideIndexBirds += nBirds);
}

// Thumbnail image controls
function currentSlideBirds(nBirds) {
  showSlidesBirds(slideIndexBirds = nBirds);
}

function showSlidesBirds(nBirds) {
  var i;
  var slides = document.getElementsByClassName("mySlidesBirds");
  //var dots = document.getElementsByClassName("dot");
  if (nBirds > slides.length) {slideIndexBirds = 1} 
  if (nBirds < 1) {slideIndexBirds = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  //for (i = 0; i < dots.length; i++) {
  //    dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndexBirds-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}