$(function(){
	
	$('.modalImg').on({
		mouseover: function(){
			$(this).prev().css({transform:'scale(1.1,1.1)',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$(this).prev().css({transform:'scale(1,1)',transition:'all 0.9s'});
		}
		
	});
});