var main = function(){
	$('#saber_mas').click(function(){
		$('#main').animate({top: "-200%"}, 2000);
		$('#datos').css('position', 'absolute');
	});

	$('#up').click(function(){
		$('#main').animate({top: "0"}, 1000);
		$('#datos').css('position', 'fixed');
	});
	$('#saber_mas').mouseover(function(){document.body.style.cursor='pointer';}).mouseout(function(){document.body.style.cursor='auto';});
};
$(document).ready(main);