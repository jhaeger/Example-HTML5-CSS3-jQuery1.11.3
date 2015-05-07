var getOut = function() {
  $(".stretchIt").click(function() {
    $(".stretcher").animate({
      opacity: 0.72,
      height: 200,
      width: 380,
	  margin: 15
      }, 600);
    $(".stretchIt").animate({
      opacity: 0
    }, 0);
    $(".shrinkIt").animate({
      opacity: 1
    }, 1200);
	$(".blockTitle").animate({
		opacity: 0.9,
		margin: 15
	}, 600);
  });
};

var getIn = function() {
  $(".shrinkIt").click(function() {
    $(".stretcher").animate({
      opacity: 1,
      height: 100,
      width: 100,
	  margin: 10
    }, 200);
    $(".shrinkIt").animate({
      opacity: 0
    }, 200);
    $(".stretchIt").animate({
      opacity: 1
    }, 600);
	$(".blockTitle").animate({
		opacity: 1,
		margin: 10
	}, 200);
  })
};

$(document).ready(getOut);
$(document).ready(getIn);