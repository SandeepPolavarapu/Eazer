/*
* Theme Name: Invention
* Theme URI: http://www.jozoor.com
* Description: Invention Theme for corporate and creative sites, responsive and clean layout, more than color skins
* Author: Jozoor team
* Author URI: http://www.jozoor.com
* Version: 1.0
*/

/*
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
=     00   00 00 00   00 00 00   00 00 00   00 00 00   00 00    =
=     00   00    00        00    00    00   00    00   00       =
=     00   00    00      00      00    00   00    00   00       =
=     00   00    00    00        00    00   00    00   00       =
=  00 00   00 00 00   00 00 00   00 00 00   00 00 00   00       =
= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
*/

jQuery(document).ready(function($) {

// UItoTop plugin 	
$().UItoTop({ easingType: 'easeOutQuart' });
 
// reponsive menu
$("#menu > a").click(function () {
      $("#menu > ul").slideToggle("fast");
});

(function ($) {
$('#menu > a').bind('click', function () {
  if ($(this).hasClass('current')) {
	  $(this).removeClass('current');
	  $(this).parent().parent().find('#menu > ul').slideUp('fast');
	  
	  return false;
  } else {
	  $(this).addClass('current');
	  $('#menu').removeClass('navigation');
	  $('#menu').addClass('responsive');
	  $(this).parent().parent().find('#menu > ul').slideDown('fast');
	  
	  return false;
  }
} );


$(window).bind('resize', function () { 
  if ($(this).width() > 959) {
	  $('#menu > a').removeClass('current');
	  $('#menu').removeClass('responsive');
	  $('#menu').addClass('navigation');
	  $('#menu > ul').removeAttr('style');
  } else {
	  $('#menu').removeClass('navigation');
	  $('#menu').addClass('responsive');  
  }
});

} )(jQuery);



// Touch-friendly drop-down navigation
$( '#menu li:has(ul)' ).doubleTapToGo();

$(function() {
    $('#menu a').each(function() {
        if ( $(this).parent('li').children('ul').size() > 0 ) {
            $(this).append('<i class="icon-angle-down responsive"></i>');
        }           
    });
});

$("a.down-button").click(function () {
      $(".slidedown").slideToggle("slow");
});

  // Flex Slider
  $(window).ready(function () {

      $('.flexslider').flexslider({
          animation: 'slide',
          animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
          slideshow: true,                //Boolean: Animate slider automatically
          slideshowSpeed: 6000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
          animationSpeed: 8,             //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
          pauseOnHover: true,
          pauseOnAction: true,
          controlNav: false,
          directionNav: true,
          controlsContainer: '.flex-container',
          start: function (slider) {
              var toptitle = $('.slider-1 .flex-active-slide h2').data('toptitle');
              var topimage = $('.slider-1 .flex-active-slide .item').data('topimage');
              var bottomtext = $('.slider-1 .flex-active-slide p').data('bottomtext');
              var bottomlinks = $('.slider-1 .flex-active-slide .links').data('bottomlinks');

              //$('.slider-1 .flex-active-slide').find('.item').css({ top: topimage });
              $('.slider-1 .flex-active-slide').find('.item').animate({ width:'100%', right: '0', opacity: '1' }, 10);
              $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: toptitle, opacity: '1' }, 15);
              $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: bottomtext, opacity: '1' }, 15);
              $('.slider-1 .flex-active-slide').find('.links').animate({ left: '0', bottom: bottomlinks, opacity: '1' }, 18);

              // remove class loading after start
              slider.removeClass('loading');
          },
          before: function (slider) {
              $('.slider-1 .flex-active-slide').find('.item').animate({ right: '-100%', opacity: '0' }, 10);
              $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: '-100%', opacity: '0' }, 15);
              $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: '-50%', opacity: '0' }, 15);
              $('.slider-1 .flex-active-slide').find('.links').animate({ left: '0', bottom: '-100%', opacity: '0' }, 18);
          },
          after: function (slider) {
              var toptitle = $('.slider-1 .flex-active-slide h2').data('toptitle');
              var topimage = $('.slider-1 .flex-active-slide .item').data('topimage');
              var bottomtext = $('.slider-1 .flex-active-slide p').data('bottomtext');
              var bottomlinks = $('.slider-1 .flex-active-slide .links').data('bottomlinks');

              //$('.slider-1 .flex-active-slide').find('.item').css({ top: topimage });
              $('.slider-1 .flex-active-slide').find('.item').animate({ width: '100%', right: '0', opacity: '1' }, 10);
              $('.slider-1 .flex-active-slide').find('h2').animate({ left: '0', top: toptitle, opacity: '1' }, 15);
              $('.slider-1 .flex-active-slide').find('p').animate({ left: '0', bottom: bottomtext, opacity: '1' }, 15);
              $('.slider-1 .flex-active-slide').find('.links').animate({ left: '0', bottom: bottomlinks, opacity: '1' }, 18);
          }
      });
  });
// top bar show & hide
(function ($) {
$('a.down-button').bind('click', function () {
  if ($(this).hasClass('current')) {
	  $(this).removeClass('current');
	  $('a.down-button > i').removeClass('icon-angle-up');
	  $('a.down-button > i').addClass('icon-angle-down');
	  $(this).parent().parent().find('.slidedown').slideUp('slow');
	  
	  return false;
  } else {
	  $(this).addClass('current');
	  $('a.down-button > i').removeClass('icon-angle-down');
	  $('a.down-button > i').addClass('icon-angle-up');
	  $(this).parent().parent().find('.slidedown').slideDown('slow');
	  
	  return false;
  }
} );


$(window).bind('resize', function () { 
  if ($(this).width() > 768) {
	  $('a.down-button').removeClass('current');
	  $('a.down-button > i').removeClass('icon-angle-up');
	  $('a.down-button > i').addClass('icon-angle-down');
	  $('.slidedown').removeAttr('style');
  }
} );
} )(jQuery);

});
							
