$(function(){
	
//이미지 박스에 마우스 이벤트	
	$('.section7-img-wrap-1').on({
		mouseover: function(){
			$('.img-cover1').css({border:'8px solid rgba(255,255,255,0.4)'});
			$('.s7-1-1').css({marginTop:'80%',transition:'all 0.3s',color:'#000',fontSize:'28px'});
			$('.s7-1-2').css({marginTop:'35px',transition:'all 0.3s'});
			$('.stick').css({top:'50%',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$('.s7-1-1').css({marginTop:'50%',transition:'all 0.3s',color:'#fff',fontSize:'35px'});
			$('.s7-1-2').css({marginTop:'70%',transition:'all 0.3s'});
			$('.img-cover1').css({border:'none',transition:'all 0.3s'});
			$('.stick').css({top:'105%',transition:'all 0.3s'});
		}
	});
	
	$('.section7-img-wrap-2').on({
		mouseover: function(){
			$('.img-cover2').css({border:'8px solid rgba(255,255,255,0.4)'});
			$('.s7-2-1').css({marginTop:'80%',transition:'all 0.3s',color:'#000',fontSize:'28px'});
			$('.s7-2-2').css({marginTop:'35px',transition:'all 0.3s'});
			$('.stick2').css({top:'50%',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$('.s7-2-1').css({marginTop:'50%',transition:'all 0.3s',color:'#fff',fontSize:'35px'});
			$('.s7-2-2').css({marginTop:'70%',transition:'all 0.3s'});
			$('.img-cover2').css({border:'none',transition:'all 0.3s'});
			$('.stick2').css({top:'105%',transition:'all 0.3s'});
		}
	});

	$('.section7-img-wrap-3').on({
		mouseover: function(){
			$('.img-cover3').css({border:'8px solid rgba(255,255,255,0.4)'});
			$('.s7-3-1').css({marginTop:'80%',transition:'all 0.3s',color:'#000',fontSize:'28px'});
			$('.s7-3-2').css({marginTop:'35px',transition:'all 0.3s'});
			$('.stick').css({top:'50%',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$('.s7-3-1').css({marginTop:'50%',transition:'all 0.3s',color:'#fff',fontSize:'35px'});
			$('.s7-3-2').css({marginTop:'70%',transition:'all 0.3s'});
			$('.img-cover3').css({border:'none',transition:'all 0.3s'});
			$('.stick').css({top:'105%',transition:'all 0.3s'});
		}
	});

	$('.section7-img-wrap-4').on({
		mouseover: function(){
			$('.img-cover4').css({border:'8px solid rgba(255,255,255,0.4)'});
			$('.s7-4-1').css({marginTop:'80%',transition:'all 0.3s',color:'#000',fontSize:'28px'});
			$('.s7-4-2').css({marginTop:'35px',transition:'all 0.3s'});
			$('.stick2').css({top:'50%',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$('.s7-4-1').css({marginTop:'50%',transition:'all 0.3s',color:'#fff',fontSize:'35px'});
			$('.s7-4-2').css({marginTop:'70%',transition:'all 0.3s'});
			$('.img-cover4').css({border:'none',transition:'all 0.3s'});
			$('.stick2').css({top:'105%',transition:'all 0.3s'});
		}
	});
	
	


//sec7Bt 마우스 오버시 이벤트	
	$('.sec7Bt').on({
		mouseover: function(){
			$('.stick').css({width:'180px',left:'30%'})
			$('.stick2').css({width:'180px',left:'30%'})
			
		},
		mouseleave: function(){
			$('.stick').css({width:'105px',left:'38%'})
			$('.stick2').css({width:'105px',left:'38%'})
		}
	});
	
});