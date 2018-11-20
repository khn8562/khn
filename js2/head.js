$(function(){
	var a=0;
	var t=0;
	
	$('.mobile-menu').fadeOut;
	
	$(window).scroll(function(){
		fixedHeader();
	});

	
	$('.mobile-menu').fadeOut(0);
	
	$('.barsBt').on({
		click: function(){
			if(a==0){
				$('.mobile-menu').fadeIn(0);
				a=1;
			}
			else if (a==1){
				$('.mobile-menu').fadeOut(0);
				a=0;
			}
		}
	});
	
	
		function fixedHeader(){
		if($(window).scrollTop()>=10){
			if(a==0){
				$('#header').css({background:'rgba(0,0,0,0.8)',border:0,height:65,transition:'all .3s'});
				$('.navBt').css({margin:'20px 20px',transition:'all .3s'});
				t=1;
			}
		}
		else{
				$('#header').css({backgroundColor:'transparent',borderBottom:'1px solid rgba(255,255,255,0.3)',height:76});
				$('.navBt').css({margin:'27px 20px',transition:'all .3s'});
				t=0;
			}
		}
	
	
});