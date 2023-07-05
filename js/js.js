$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-link.active').removeClass('active');
    $(this).addClass('active');
  });

  $('.nav-link').click(function () {
    if ($(window).width() < 991) {
      $('.navbar-collapse').collapse('hide');
    }
  });



  /**Animation */
  function PinkSeperatorAnim() {
    var reveals = document.querySelectorAll(".AboutUs,.Partners,.header,.Documentations , .Values,.ArtSection,.Research,.Sponsers,.footer");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", PinkSeperatorAnim);



  // Add 'active' class when the screen is loaded
  $('header.header').addClass('active');

  // Wait 4 seconds and add 'active' class again
  setTimeout(function () {
    $('header.header').addClass('again');
  }, 2000);

  if (performance.navigation.type === 1) {
    // Scroll to the top of the page
    $('html, body').scrollTop(0);
  }
});

$(window).scroll(function () {
  var navbarHeight = $('.navbar').outerHeight(); // Get the height of the navbar
  var imagePartOffsetTop = $('.ImagePart img').offset().top; // Get the top offset of the ImagePart section
  var scrollTop = $(window).scrollTop(); // Get the current scroll position

  if (scrollTop >= imagePartOffsetTop - navbarHeight) {
    $('.navbar').css('z-index', '3000000'); // Change the z-index of the navbar
  } else {
    $('.navbar').css('z-index', '1050'); // Reset the z-index of the navbar
  }
});