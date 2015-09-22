$(function() {
  $(window).stellar();

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if(wScroll > $('.makeout-point .animated').offset().top - ($(window).height() / 1.7)){

     $('.makeout-point .animated').each(function(i){

       setTimeout(function(){
         $('.makeout-point .animated').eq(i).addClass('treeShake');
       }, (1200 * (Math.exp(i * 0.1))) - 1200);

     });

    }

    if(wScroll < $('.makeout-point .animated').offset().top - ($(window).height()) && $('.makeout-point .animated .treeShake')){
      $('.makeout-point .animated').removeClass('treeShake');
    }

  });

  $('#highlights img.animated').on('mouseout', function(){
   $(this).addClass('bounceIn').one(animationEnd, function(){
     $(this).removeClass('bounceIn');
   });
  });

// Toggle Mobil Navbar:
  $('.mobile-nav-toggle').on('click', function(){
    $('.mobile-nav-toggle, .mobile-nav').toggleClass('is-open');

    if($('.mobile-nav').hasClass('is-open')){
      $('body').css('overflow',"hidden");
      $('a').on('click', function(){
        $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
        $('body').css('overflow',"auto");
      });
    } else {
      $('body').css('overflow',"auto");
    }
  });

// Contact Us Overlay
  $('li#contactUs').on('click', function(){
    $('.overlay').addClass('is-open');
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
  });

// Parallax.js
  $('#scene').parallax();

});
