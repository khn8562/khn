$(function(){

	$(window).scroll(function(){
		fn_gotop();
	});

	$('.goTopBt').on({
		click: function(){
			$('html,body').animate({scrollTop:0},600);
		}
	});
	
	$('.goTopBt-wrap').stop().animate({opacity:0},0);	
		//
			
			
			
			function fn_gotop(){
			if($(window).scrollTop()>=100){ 
				$('.goTopBt-wrap').stop().animate({opacity:1},600);
			}
			else{
				$('.goTopBt-wrap').stop().animate({opacity:0},600);
			}
		}
});