$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } 
    else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0}, 1000);   
  });
});

/* ------------------------------------------------------------------- */

/* ---------------------------------------------- */
$(document).ready(function(){
  $("#bio").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

/*--------------------------------------------------------------------- */

/* ---------------------------------------------- */
$(window).ready(function(){
    $(".div-hero").fadeIn('slow');
  });
  
  const toggle = document.getElementsByClassName("navbar-toggle");
  
  toggle[0].addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("is-active");
  });
  
  const closeNavbarMobile = document.getElementsByClassName("close");
  
  /*closeNavbarMobile[0].addEventListener("click", function(event) {
    event.preventDefault();
    toggle[0].classList.remove("is-active");
});*/

/*--------------------------------------------------------------------------------*/

/* ---------------------------------------------- */
block_pos = $('.sticky').offset().top;
wrap_pos = $('.main').offset().top;
block_height = $('.sticky').outerHeight();
wrap_height = $('.main').outerHeight();
block_width = $('.sticky').outerWidth();
pos_absolute = wrap_pos + wrap_height - block_height;
$(window).scroll(function () {
    if ($(window).scrollTop() > pos_absolute) {
        $('.sticky').css({
            'position': 'absolute',
            'top': wrap_height - block_height,
            'width': block_width
        });
    }
    else if ($(window).scrollTop() > block_pos) {
        $('.sticky').css({
            'position': 'fixed',
            'top': '10px',
            'width': block_width
        });
    } else {
        $('.sticky').css({
            'position': 'static'
        });
    }
})

