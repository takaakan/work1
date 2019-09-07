//モーダル
$(function() {
  $(".login-show").click(function(){
    $(".login-modal-wrapper").fadeIn();
  });


  $(".register-show").click(function(){
    $(".register-modal-wrapper").fadeIn();
  });

  $(".close-modal").click(function(){
    $(function(){
      $(".register-modal-wrapper").fadeOut();
      $(".login-modal-wrapper").fadeOut();
    });
  });



  //スクロール

  $("#top-btn").click(function(){
    $("html,body").animate({"scrollTop":0},800);
  });

  $("#about-btn").click(function(){
    $("html,body").animate({scrollTop:$("#about").offset().top},800);
  });

  $("#merit-btn").click(function(){
    $("html,body").animate({scrollTop:$("#merit").offset().top},800);
  });

  $("#price-btn").click(function(){
    $("html,body").animate({scrollTop:$("#price").offset().top},800);
  });

  $("#faq-btn").click(function(){
    $("html,body").animate({scrollTop:$("#faq").offset().top},800);
  });

  $("#contact-btn").click(function(){
    $("html,body").animate({scrollTop:$("#contact").offset().top},800);
  });



  //アコーディング
  $(".faq-list-item").click(function(){
    var $answer = $(this).find(".answer");
    if($answer.hasClass("open")){
      $answer.removeClass("open");
      $answer.slideUp();
      $(this).find("span").text("+");

    }else {
      $answer.addClass("open");
      $answer.slideDown();
      $(this).find("span").text("-");
    };
  });

});
