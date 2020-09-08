$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('.navbar').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky'); 
        }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
});

$(function() {
    //caches a jQuery object containing the header element
    var header = $(".bgt");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 120) {
            header.removeClass('bgt').addClass("bgd");
        } else {
            header.removeClass("bgd").addClass('bgt');
        }
    });
});



	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 670) {
				header.removeClass('inactive').addClass("active");
			} else {
				header.removeClass("active").addClass('inactive');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".active");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 670) {
				header.removeClass('active').addClass("inactive");
			} else {
				header.removeClass("inactive").addClass('active');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive1");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 1268) {
				header.removeClass('inactive1').addClass("active");
			} else {
				header.removeClass("active").addClass('inactive1');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 1268 ) {
				header.removeClass('active').addClass("inactive");
			} 
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive2");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 2800) {
				header.removeClass('inactive2').addClass("active");
			} else {
				header.removeClass("active").addClass('inactive2');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive1");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 2800) {
				header.removeClass('active').addClass("inactive1");
			} 
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive3");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 4678) {
				header.removeClass('inactive3').addClass("active");
			} else {
				header.removeClass("active").addClass('inactive3');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive2");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 4678) {
				header.removeClass('active').addClass("inactive2");
			} 
		});
	});
		$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive4");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 5470) {
				header.removeClass('inactive4').addClass("active");
			} else {
				header.removeClass("active").addClass('inactive4');
			}
		});
	});
	$(function() {
		//caches a jQuery object containing the header element
		var header = $(".inactive3");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 5470) {
				header.removeClass('active').addClass("inactive3");
			} 
		});
	});
		$(function() {
		//caches a jQuery object containing the header element
		var header = $(".go-none");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
	
			if (scroll >= 100) {
				header.removeClass('go-none').addClass("go-active");
			} else {
				header.removeClass("go-active").addClass('go-none');
			}
		});
	});
	$(function() {
			$(".slideText").slideTextLeft(
				{ words: ["Web Designer", "Web Developer", "Graphic Designer"], delay: 2000 }
				//{ words: "business" }
				//"business"
				//["ideas", "business", "passion"], 100
			);
		});
	$(document).ready(function () {
    
});