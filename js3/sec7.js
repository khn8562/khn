$(function(){
	$('.blog-1-wrap').on({
		mouseover: function(){
			$(this).css({backgroundColor:'#f5f5f5'});
			$('.sec7Bt1').css({backgroundColor:'#917e5a',color:'#fff',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$(this).css({backgroundColor:'transparent'});
			$('.sec7Bt1').css({backgroundColor:'transparent',color:'#917e5a',transition:'all 0.9s'});
		},
		
	});
	
	$('.blog-2-wrap').on({
		mouseover: function(){
			$(this).css({backgroundColor:'#f5f5f5'});
			$('.sec7Bt2').css({backgroundColor:'#917e5a',color:'#fff',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$(this).css({backgroundColor:'transparent'});
			$('.sec7Bt2').css({backgroundColor:'transparent',color:'#917e5a',transition:'all 0.9s'});
		},
		
	});
	
	$('.blog-3-wrap').on({
		mouseover: function(){
			$(this).css({backgroundColor:'#f5f5f5'});
			$('.sec7Bt3').css({backgroundColor:'#917e5a',color:'#fff',transition:'all 0.9s'});
		},
		mouseleave: function(){
			$(this).css({backgroundColor:'transparent'});
			$('.sec7Bt3').css({backgroundColor:'transparent',color:'#917e5a',transition:'all 0.9s'});
		},
		
	});
	
	
});