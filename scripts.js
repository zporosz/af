//This code from jQuery

$(document).ready(function(){

  // hide Home first
  $(".menuHome").hide();
	
  // fade in Home
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.menuHome').fadeIn();
      } else {
        $('.menuHome').fadeOut();
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
  $('.menuHome').click(function(){
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

$(document).ready(function(){

  // hide Gallery (Page 2) menu
  $(".menuPage2").hide();
	
  // fade in Home
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(".page2").offset().top - 500) {
        $('.menuPage2').fadeIn();
      } else {
        $('.menuPage2').fadeOut();
      }
    });
  });      
  
  
  // show and hide the gallery by the menu click
 $( ".menuBp" ).click(function() {
   
   
   // Pushed the 'Budapest' button
   // Show: Budapest, Hide: Madarak, Tájképek
    $( ".galleryPageBp").fadeIn( "2000" );
    $( ".menuBp" ).css( "color", "blue" );  
   
    $( ".galleryPageBirds" ).fadeOut( "2000" );
    $( ".menuBirds" ).css( "color", "rgba(0, 0, 0, 0.8)" );
   
    $( ".galleryPageNatural" ).fadeOut( "2000" );
    $( ".menuNatural" ).css( "color", "rgba(0, 0, 0, 0.8)" );
  });
  
  // Pushed the 'Madarak' button
   // Show: Madarak, Hide: Budapest, Természet
  $( ".menuBirds" ).click(function() {
    $( ".galleryPageBp" ).fadeOut( "2000" );
    $( ".menuBp" ).css( "color", "rgba(0, 0, 0, 0.8)" );
    
    $( ".galleryPageBirds" ).fadeIn( "2000" );
    $( ".menuBirds" ).css( "color", "blue" );
    
    $( ".galleryPageNatural" ).fadeOut( "2000" );
    $( ".menuNatural" ).css( "color", "rgba(0, 0, 0, 0.8)" );
  });
  
  // Pushed the 'Természet' button
   // Show: Természet, Hide: Budapest, Madarak
  $( ".menuNatural" ).click(function() {
    $( ".galleryPageBp" ).fadeOut( "2000" );
    $( ".menuBp" ).css( "color", "rgba(0, 0, 0, 0.8)" );
    
    $( ".galleryPageBirds" ).fadeOut( "2000" );
    $( ".menuBirds" ).css( "color", "rgba(0, 0, 0, 0.8)" );
    
    $( ".galleryPageNatural" ).fadeIn( "2000" );
    $( ".menuNatural" ).css( "color", "blue" );
  });
  
  // Pushed the '>>' (Hide) button
   // Show: -, Hide: Budapest, Madarak, Természet
  $( ".menuHide" ).click(function() {
    $( ".galleryPageBp" ).fadeOut( "2000" );
    $( ".menuBp" ).css( "color", "rgba(0, 0, 0, 0.8)" );
    
    $( ".galleryPageBirds" ).fadeOut( "2000" );
    $( ".menuBirds" ).css( "color", "rgba(0, 0, 0, 0.8)" );
    
    $( ".galleryPageNatural" ).fadeOut( "2000" );
    $( ".menuNatural" ).css( "color", "rgba(0, 0, 0, 0.8)" );
  });
  
});






















