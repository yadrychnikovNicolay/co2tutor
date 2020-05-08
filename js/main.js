$(function() {
	$('ul.nav a').bind('click',function(event){
    event.preventDefault();
		var $anchor = $(this);
    console.log($anchor.attr('href'))
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 400);
		event.preventDefault();
	});
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#scroll-button').fadeIn();
    } else {
        $('#scroll-button').fadeOut();
    }
});

$(document).ready(function() {
    $("#scroll-button").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});

$(document).ready(function(){
    $('.carousel').carousel();
});

$(document).ready(function(){
    $('.parallax').parallax();
});