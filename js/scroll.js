$(function(){
	
	var t=0; //once play
	
	
	//window Scroll Event /nav 고정메뉴 스크롤 이벤트
	$(window).scroll(function(){
		if($(window).scrollTop()>=10){
			if(t==0){
				t=1;
			$('#header').stop().animate({top:-100},0)
							   .animate({top:0},30)
							   .css({background:'#fff',boxShadow:'2px 3px 7px rgba(0,0,0,0.3)'});
					}
		}
		else{
			t=0;
			$('#header').stop().animate({top:0},0)
							   .css({background:'transparent',boxShadow:'0px 0px 0px rgba(0,0,0,0)'});
		
		}
	});
	
});