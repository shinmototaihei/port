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

