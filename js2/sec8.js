$(function(){
	
	$('.gallBt').on({
		mouseover: function(){
			$(this).css({cursor:'url(img/cursor.png),auto'});
			$(this).prev().css({transform:'scale(1.2,1.2)',transition:'all 0.3s'});
			$(this).next().css({top:'0%'});
		},
		mouseleave: function(){
			$(this).prev().css({transform:'scale(1,1)',transition:'all 0.3s'});
			$(this).next().css({top:'100%',transition:'all 0.1s'});
		}
	});
		
});



