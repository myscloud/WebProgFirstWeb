
$(document).ready(function() {

	// create new sticker in canvas

	$("body").click(function(event) {
		
		// clear previous selected item
		$(".selected").removeClass("selected");

		var target = $(event.target);   
		if(target.parents("ul#sticker-list").length) {
			newObj = target.clone().appendTo("#overlay");
			newObj.addClass("sticker").addClass("selected").css({
				width: 150 + "px",
				height: "auto",
				top: "40%",
				left: "40%"
			});
			newObj.attr("deg", 0)
		}

		if(target.hasClass("sticker")) {
			target.addClass("selected");
		}
	});

	// draggable object
	$(function() {
    	$( ".sticker" ).draggable();
  	});

  	// modify selected sticker
  	// thanks to http://stackoverflow.com/questions/19347269/jquery-keypress-arrow-keys
  	$("body").keydown(function(event) {
  		var code = event.keyCode || event.which;
  		var deg = $(".selected").attr("deg");

  		if(code == 38) { // up arrow
  			$(".selected").css({
  				top: $(".selected").position().top - 5 + "px"
  			});
  		}
  		else if(code == 40) { // down arrow
  			$(".selected").css({
  				top: $(".selected").position().top + 5 + "px"
  			});
  		}
  		else if(code == 37) { // left arrow
  			if(event.shiftKey) {
  				$(".selected").css({
  					transform: "rotate(" + (deg-5) + "deg)",
  					"zoom": 1
  				})
  				.attr("deg", parseInt(deg, 10)-5);
  			}
  			else {
  				$(".selected").css({
  					left: $(".selected").position().left - 5 + "px"
  				});
  			}
  		}
  		else if(code == 39) { // right arrow
  			if(event.shiftKey) {
  				$(".selected").css({
  					transform: "rotate(" + (deg-355) + "deg)",
  					"zoom": 1
  				})
  				.attr("deg", parseInt(deg, 10)-355);
  			}
  			else {
	  			$(".selected").css({
	  				left: $(".selected").position().left + 5 + "px"
	  			});
  			}
  		}
  		else if(code == 46) { // backspace
  			$(".selected").remove();
  		}
  		else if(code == 13) {
  			$(".selected").removeClass("selected");
  		}
  	});

  	$("body").keypress(function(event) {
  		var code = event.keyCode || event.which;
  		var width = $(".selected").width();
  		var height = $(".selected").height();
  		if(code == 43) { // plus
  			$(".selected").css({
  				width: width * (105/100) + "px",
  				height: height * (105/100) + "px"
  			});
  		}
  		else if(code == 45) { // minus
  			$(".selected").css({
  				width: width * (95/100) + "px",
  				height: height * (95/100) + "px"
  			});
  		}
  	});

});
