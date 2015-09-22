$(function() {

  var clearTimout;

  $(window).resize(function(){
    if($(window).width() <= 1009){
      $('.sunset').attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $('.backTrees').attr({
        'data-stellar-background-ratio':'1.10',
        'data-stellar-vertical-offset':'-250'
      });
      $('.midTrees').attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'-350'
      });
      $('.frontTrees').attr({
        'data-stellar-background-ratio':'1.35',
        'data-stellar-vertical-offset':'-900'
      });
    }
    if($(window).width() > 1009){
      $('.sunset').attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $('.midTrees').attr({
        'data-stellar-background-ratio':'1.20',
        'data-stellar-vertical-offset':'-150'
      });
      $('.frontTrees').attr({
        'data-stellar-background-ratio':'1.35',
        'data-stellar-vertical-offset':'-600'
      });
    }
    if(this.resizeTO) clearTimout(this.resizeTO);
      this.resizeTO = setTimeout(function(){
        $(this).trigger('reloadPage');
      }, 500);
  });

  $(window).bind('reloadPage', function(){
    location.reload();
  });


  if($(window).width() <= 1009){
    $('.sunset').attr({
      'data-stellar-background-ratio':'0.85',
      'data-stellar-vertical-offset':'0'
    });
    $('.backTrees').attr({
      'data-stellar-background-ratio':'1.10',
      'data-stellar-vertical-offset':'-250'
    });
    $('.midTrees').attr({
      'data-stellar-background-ratio':'1.15',
      'data-stellar-vertical-offset':'-350'
    });
    $('.frontTrees').attr({
      'data-stellar-background-ratio':'1.35',
      'data-stellar-vertical-offset':'-900'
    });
    $.stellar();
  }
  if($(window).width() > 1009){
    $('.sunset').attr({
      'data-stellar-background-ratio':'0.85',
      'data-stellar-vertical-offset':'0'
    });
    $('.midTrees').attr({
      'data-stellar-background-ratio':'1.20',
      'data-stellar-vertical-offset':'-150'
    });
    $('.frontTrees').attr({
      'data-stellar-background-ratio':'1.35',
      'data-stellar-vertical-offset':'-600'
    });
    $.stellar();
  }

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if(wScroll > $('.makeout-point .animated').offset().top - ($(window).height() / 1.7)){

     $('.makeout-point .animated').each(function(i){

       setTimeout(function(){
         $('.makeout-point .animated').eq(i).addClass('treeShake');
       }, (700 * (Math.exp(i * 0.1))) - 700);

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
  $('li.contactUs').on('click', function(){
    $('.overlay').addClass('is-open');
  });

  $('.close-btn').on('click', function(){
    $('.overlay').removeClass('is-open');
  });

// Parallax.js
  $('#scene').parallax();

});
