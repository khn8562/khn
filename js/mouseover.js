$(function(){
	
	$('.galleryBt').on({
		mouseover: function(){
			$(this).next().css({top:'0%'});
		},
		mouseleave: function(){
			$(this).next().css({top:'100%',transition:'all 0.1s'});
		}
	});
		
});