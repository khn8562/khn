$(function(){
	var a='off'
	
	$('.mobile-menu').fadeOut(0);
	
	$('.barsBt').on({
		click: function(){
			if(a=='off'){
				$('.mobile-menu').fadeIn(0);
				a='on';
			}
			else if (a=='on'){
				$('.mobile-menu').fadeOut(0);
				a='off';
			}
		}
	});
});