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
          // ??????????????????????????????
          $changePoint = $('#service').offset().top;
          if($scrollTop < $changePoint){
            // ????????????????????????????????????????????????????????????
            if(beforeBg !== 'bgA'){
              // ????????????????????????
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
