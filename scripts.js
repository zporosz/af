$(document).ready(function(){

  // hide #back-top first
  $(".home").hide();
	
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.home').fadeIn();
      } else {
        $('.home').fadeOut();
      }
    });

    // scroll body to 0px on click
      $('.home a').click(function () {
        $('body,html').animate({
          scrollTop: $(".page1").offset().top
        }, 1000);
          return false;
        });
  });      
});

// Menu controlers
$("document").ready(function() {
  
  // Home button
  $('.home').click(function(){
    $('html, body').animate({
      scrollTop: $(".page1").offset().top
    }, 1200);				   
  });
  
  // Gallery button
  $('.menuGallery').click(function(){
    $('html, body').animate({
      scrollTop: $(".separator1").offset().top
    }, 1200);				   
  });
  
  // Photographer button
  $('.menuPhotographer').click(function(){
    $('html, body').animate({
      scrollTop: $(".separator2").offset().top
    }, 1200);				   
  });
  
  // Contact button
  $('.menuContact').click(function(){
    $('html, body').animate({
      scrollTop: $(".separator3").offset().top
    }, 1200);				   
  });
  
});