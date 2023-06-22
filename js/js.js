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




      /**Animation */
      function PinkSeperatorAnim() {
        var reveals = document.querySelectorAll(".PinkSeperator, .RoundedImageCarousel ,.Cards3Part,.ProductCarouse,.whyUs,.youNeedHelp,.FooterCards,.FooterServices ,.AnimatedRow");
      
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
      
      

      $(window).scroll(function() {
        var targetDiv = $('.col-xl-8  .d-flex.flex-column.justify-content-between.align-items-center');
        var targetImage = targetDiv.find('img');
      
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
        var targetDivPosition = targetDiv.offset().top;
        var targetDivHeight = targetDiv.outerHeight();
      
        if (scrollPosition > targetDivPosition - windowHeight + 200 &&
            scrollPosition < targetDivPosition + targetDivHeight) {
          targetImage.addClass('animate__animated animate__slideInLeft  ');
          targetImage.removeClass('animate__slideOutLeft d-none');
        } else {
          targetImage.removeClass('animate__slideInLeft');
          targetImage.addClass('animate__slideOutLeft d-none');
        }
      });
      


  });


 