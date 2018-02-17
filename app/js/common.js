$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form.respond").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "", //Change
			data: th.serialize()
		}).done(function() {
			//alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/* Social media icons animation */
	$("a.s-med").mouseenter(function(){
		$(this).addClass("animated jello");
	});
	$("a.s-med").mouseleave(function(){
		$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			$(this).removeClass("jello");
		});
	});

	/* Hiding topline */
	if(window.innerWidth >= 576) {
		$(".main-head").waypoint(function(){
			$(".topline").toggleClass('closed');
		} , {
			offset: '-10%'
		});
	} else $(".topline").addClass('closed');
	

	$(".s-waypoint").each(function() {
		var id = $(this).attr("id");

		$(this).waypoint(function() {
			$(".topline .active").removeClass('active');
			$("#link-" + id).addClass('active');
		}, {
			offset: -1
		});
		
	});

	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
		}, 600);
	});


	// Smooth change of bg image
	var bg = 0;
	$(".s-waypoint").each(function () {
		$(this).mousewheel(function() {
			var num = $(this).attr("id");
			if (bg != num) {
				$(".ishome .bg").animate({ opacity: 0.1 }, 100, function() {
					$(".ishome .bg").css("background-image", "url(../img/bg/bg" + num + ".jpg)");
					$(".ishome .bg").animate({ opacity: 0.3 }, 600);
				});
				bg = num;
			}
		});
	});

});

/* Padding of myProjects items */
var elems = document.getElementsByClassName('forPadding');

for (i = 0; i < elems.length; i++) {
	if (i % 2 == 0) {
		elems[i].classList.add('pr-xl-5', 'p-0');
	} else elems[i].classList.add('pl-xl-5', 'p-0');
}

/* Width of myProjects items */
var items = document.getElementsByClassName('s-myProjects')[0].getElementsByClassName('item-wr');
var width = items[0].offsetWidth;

for (i = 0; i < items.length; i++) {
	items[i].style.height = width / 16 * 9 + 70 + "px";
}
