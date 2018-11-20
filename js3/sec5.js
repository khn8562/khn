$(function(){
	
	//이미지 마우스 오버시 버튼 색상변경
	$('.5Limg1').on({
		mouseover: function(){
			$('.sec5LBt1').children().css({background:'#fff',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$('.sec5LBt1').children().css({background:'transparent',transition:'all 0.9s'});
		}		
	});
	//이미지 마우스 오버시 이미지 확대 2,3번 이미지
	$('.sec5imgBt').on({
		mouseover: function(){
			$(this).prev().css({transform:'scale(1.2,1.2)',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$(this).prev().css({transform:'scale(1,1)',transition:'all 0.9s'});
		}
	});
	
});