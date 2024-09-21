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

// Slider
$(document).ready(function() {
    $('.hero-slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      arrowsPlacement: 'beforeSlides',
      prevArrow: '<button type="button" class="custom-prev-button">'
                 + '  <span class="las la-angle-left" aria-hidden="true"></span>'
                 + '  <span class="sr-only">Previous slide</span>'
                 + '</button>',
      nextArrow: '<button type="button" class="custom-next-button">'
                 + '  <span class="las la-angle-right" aria-hidden="true"></span>'
                 + '  <span class="sr-only">Next slide</span>'
                 + '</button>',
      pauseIcon: '<span class="la la-pause" aria-hidden="true"></span>',
      playIcon: '<span class="la la-play" aria-hidden="true"></span>'
    });
  });

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
