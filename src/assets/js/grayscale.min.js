/*!
 * Start Bootstrap - Grayscale v5.0.4 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
 */


$("#tile-1 .nav-tabs a").click(function() {
    debugger;
  var position = $(this).parent().position();
  var width = $(this).parent().width();
    $("#tile-1 .slider").css({"left":+ position.left,"width":width});
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({"left":+ actPosition.left,"width": actWidth});


! function (e) {
    
    
    var a = function () {
        100 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink")
    };
    a(), e(window).scroll(a)
}(jQuery);

$(document).ready(function () {
    //Initialize tooltips
   
});
                  
      



/*.......................................................................................*/




