$(function() {

  var isMobile = false; //initiate as false

  // device detection
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }


  if(top.location.pathname === '/index.html' || top.location.pathname === '/') {
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
          'data-stellar-vertical-offset':'-850'
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
          'data-stellar-background-ratio':'1.25',
          'data-stellar-vertical-offset':'-800'
        });
      }
      if($(window).width() > 1009 && $(window).width() <= 1986){
        $('.sunset').attr({
          'data-stellar-background-ratio':'0.85',
          'data-stellar-vertical-offset':'0'
        });
        $('.midTrees').attr({
          'data-stellar-background-ratio':'1.15',
          'data-stellar-vertical-offset':'-150'
        });
        $('.frontTrees').attr({
          'data-stellar-background-ratio':'1.25',
          'data-stellar-vertical-offset':'-800'
        });
      }
      if($(window).width() > 1986){
        $('.sunset').attr({
          'data-stellar-background-ratio':'0.85',
          'data-stellar-vertical-offset':'0'
        });
        $('.midTrees').attr({
          'data-stellar-background-ratio':'1.15',
          'data-stellar-vertical-offset':'0'
        });
        $('.frontTrees').attr({
          'data-stellar-background-ratio':'1.25',
          'data-stellar-vertical-offset':'-500'
        });
      }
      if(isMobile === false){
        if(this.resizeTO) {
          clearTimout(this.resizeTO);
        }
          this.resizeTO = setTimeout(function(){
            $(this).trigger('reloadPage');
          }, 500);
      }
    });

    $(window).bind('reloadPage', function(){
      location.reload();
    });

    if($(window).width() > 668 && $(window).width() <= 1009){
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
        'data-stellar-vertical-offset':'-850'
      });
    }
    if($(window).width() > 1009 && $(window).width() <= 1986){
      $('.sunset').attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $('.midTrees').attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'-150'
      });
      $('.frontTrees').attr({
        'data-stellar-background-ratio':'1.25',
        'data-stellar-vertical-offset':'-800'
      });
    }
    if($(window).width() > 1986){
      $('.sunset').attr({
        'data-stellar-background-ratio':'0.85',
        'data-stellar-vertical-offset':'0'
      });
      $('.midTrees').attr({
        'data-stellar-background-ratio':'1.15',
        'data-stellar-vertical-offset':'0'
      });
      $('.frontTrees').attr({
        'data-stellar-background-ratio':'1.25',
        'data-stellar-vertical-offset':'-500'
      });
    }
  }

  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    if(top.location.pathname === '/index.html' || top.location.pathname === '/'){
      
      if(wScroll > $('.makeout-point .animated').offset().top - ($(window).height() / 1.7)){

       $('.makeout-point .animated').each(function(i){

         setTimeout(function(){
           $('.makeout-point .animated').eq(i).addClass('treeShake');
         }, (700 * (Math.exp(i * 0.09))) - 700);

       });

      }

      if(wScroll < $('.makeout-point .animated').offset().top - ($(window).height()) && $('.makeout-point .animated .treeShake')){
        $('.makeout-point .animated').removeClass('treeShake');
      }

    }

  });

  setTimeout(function(){
    $('.title').addClass('zoomIn');
  }, 1000);

  $('.newsHighlights').hover(function(){
   $(this).addClass('jello').one(animationEnd, function(){
     $(this).removeClass('jello');
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

// Parallax
  $('#scene').parallax();
  $.stellar();

});
