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
    var reveals = document.querySelectorAll(".AboutUs,.header,.Partners,.Documentations , .Values,.ArtSection,.Research,.Sponsers,.footer");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.add("BackTop");
      }
    }
  }

  window.addEventListener("scroll", PinkSeperatorAnim);


  var isScrolling = false;











});

//  window.addEventListener('DOMContentLoaded', function() {
//   var sections = document.querySelectorAll('section');

//   function updateBodyHeight() {
//     var totalHeight = 0;
//     sections.forEach(function(section) {
//       totalHeight += section.clientHeight;
//     });
//     document.body.style.height = totalHeight + 'px';
//   }

//   // Call the function initially and whenever the window is resized
//   updateBodyHeight();
//   window.addEventListener('resize', updateBodyHeight);
// });

