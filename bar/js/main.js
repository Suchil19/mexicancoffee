// Preloader
$(window).on('load', function() {
    $('#preloader').delay(100).fadeOut('slow',function(){$(this).remove();});
});

$(document).ready(function(){
$('.nav a').click(function() {

    //remove all active classes
    $('.nav a').removeClass("active");
  
    //add active to the element clicked
    $(this).addClass("active");
  
})});

  // Boton Bubly

  var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

  //Paquetes

  (function($) {

    // Menu filter
    $("#menu-filters li a").click(function() {
      $("#menu-filters li a").removeClass('active');
      $(this).addClass('active');
  
      var selectedFilter = $(this).data("filter");
      //  $("#menu-wrapper").fadeTo(100, 0);
  
      $(".menu-restaurant").fadeOut();
  
      setTimeout(function() {
        $(selectedFilter).slideDown();
        //$("#menu-wrapper").fadeTo(300, 1);
      }, 300);
    });
  
    })(jQuery);

  