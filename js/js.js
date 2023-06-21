$(document).ready(function() {
    $('.nav-link').click(function() {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    });



    $('.nav-link').click(function() {
        if ($(window).width() < 991) {
          $('.navbar-collapse').collapse('hide');
        }
      });
  });


 