$(function(){$(window).stellar();var o="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";$(window).scroll(function(){var o=$(this).scrollTop();o>$(".makeout-point .animated").offset().top-$(window).height()/1.7&&$(".makeout-point .animated").each(function(o){setTimeout(function(){$(".makeout-point .animated").eq(o).addClass("treeShake")},1200*Math.exp(.1*o)-1200)}),o<$(".makeout-point .animated").offset().top-$(window).height()&&$(".makeout-point .animated .treeShake")&&$(".makeout-point .animated").removeClass("treeShake")}),$("#highlights img.animated").on("mouseout",function(){$(this).addClass("bounceIn").one(o,function(){$(this).removeClass("bounceIn")})}),$(".mobile-nav-toggle").on("click",function(){$(".mobile-nav-toggle, .mobile-nav").toggleClass("is-open"),$(".mobile-nav").hasClass("is-open")?($("body").css("overflow","hidden"),$("a").on("click",function(){$(".mobile-nav-toggle, .mobile-nav").removeClass("is-open"),$("body").css("overflow","auto")})):$("body").css("overflow","auto")}),$("#scene").parallax()});