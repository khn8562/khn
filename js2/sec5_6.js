$(function(){
	$('.contactBt1').on({
		mouseover: function(){
			$('.section5-right-wrap>li:nth-child(4)').css({width:'130px',transition:'all 0.6s'})
		},
		mouseleave: function(){
			$('.section5-right-wrap>li:nth-child(4)').css({width:'100px',transition:'all 0.6s'})
		}
	});
	
		$('.contactBt2').on({
		mouseover: function(){
			$('.section6-left-wrap>li:nth-child(2)').css({width:'130px',transition:'all 0.6s'})
		},
		mouseleave: function(){
			$('.section6-left-wrap>li:nth-child(2)').css({width:'100px',transition:'all 0.6s'})
		}
	});
	
	
});