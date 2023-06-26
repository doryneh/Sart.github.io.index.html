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
    setTimeout(function() {
      $('header.header').addClass('again');
    }, 4000);
  

});