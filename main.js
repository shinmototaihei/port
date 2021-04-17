$(function(){
  $("#aboutme").each(function(i, elem){
    var one = $(elem).offset().top;
    $(window).on("load scroll resize", function(){
      var two = $(window).height();
      var three = $(window).scrollTop();
      var showClass = "show";
      var timing = 50; // 50px, add to css
      if (three >= one - two + timing){
        $(elem).addClass(showClass);
      } else {
        $(elem).removeClass(showClass);
      }
    });
  });
});

$(function(){
  $("#skill").each(function(i, elem){
    var one = $(elem).offset().top;
    $(window).on("load scroll resize", function(){
      var two = $(window).height();
      var three = $(window).scrollTop();
      var showClass = "show";
      var timing = 50; // 50px, add to css
      if (three >= one - two + timing){
        $(elem).addClass(showClass);
      } else {
        $(elem).removeClass(showClass);
      }
    });
  });
});

$(function(){
  $("#service").each(function(i, elem){
    var one = $(elem).offset().top;
    $(window).on("load scroll resize", function(){
      var two = $(window).height();
      var three = $(window).scrollTop();
      var showClass = "show";
      var timing = 50; // 50px, add to css
      if (three >= one - two + timing){
        $(elem).addClass(showClass);
      } else {
        $(elem).removeClass(showClass);
      }
    });
  });
});

$(function(){
  $("#works").each(function(i, elem){
    var one = $(elem).offset().top;
    $(window).on("load scroll resize", function(){
      var two = $(window).height();
      var three = $(window).scrollTop();
      var showClass = "show";
      var timing = 50; // 50px, add to css
      if (three >= one - two + timing){
        $(elem).addClass(showClass);
      } else {
        $(elem).removeClass(showClass);
      }
    });
  });
});

$("#hamburger").click(function () {
    $(this).toggleClass("activ");
    $(".menu-content2").toggleClass("opan");
});


      var beforeBg = '';
      $(window).on('load scroll touchmove', function() {
          $scrollTop = $(window).scrollTop();
          // 画像を切り替える位置
          $changePoint = $('#service').offset().top;
          if($scrollTop < $changePoint){
            // 同じ背景画像への切替を行わないように判定
            if(beforeBg !== 'bgA'){
              // 新しい画像へ切替
              $('#skill').removeClass('bgB');
              $('#skill').addClass('bgA');
              beforeBg = 'bgA';
            }
          } else {
            if(beforeBg !== 'bgB'){
              $('#skill').removeClass('bgA');
              $('#skill').addClass('bgB');
              beforeBg = 'bgB';
            }
          }
      });
