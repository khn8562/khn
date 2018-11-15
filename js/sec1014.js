$(function(){
	
//섹션10
	$('.section10-wrap').on({
		mouseover: function(){
			$('.sec10-box').stop().animate({width:'150px'},200);
			$(this).css({backgroundPosition:'center -50px',transition:'all 0.4s'});
			$('.section10-cap').css({background:'rgba(50,50,50,0.4)',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$('.sec10-box').stop().animate({width:'120px'},200);
			$(this).css({backgroundPosition:'center center',transition:'all 0.4s'});
			$('.section10-cap').css({background:'rgba(50,50,50,0.7)',transition:'all 0.1s'});
		}
		
	});
	
//섹션11	
	$('.section11-wrap').on({
		mouseover: function(){
			$('.sec11-box').stop().animate({width:'110px'},200);
			$(this).css({backgroundPosition:'center 0px',transition:'all 0.4s'});
			$('.section11-cap').css({background:'rgba(50,50,50,0.4)',transition:'all 0.1s'});
			},
		mouseleave: function(){
			$('.sec11-box').stop().animate({width:'90px'},200);
			$(this).css({backgroundPosition:'center center',transition:'all 0.4s'});
			$('.section11-cap').css({background:'rgba(50,50,50,0.7)',transition:'all 0.1s'});
		}
	});
	
//섹션12	
	$('.section12-wrap').on({
		mouseover: function(){
			$('.sec12-box').stop().animate({width:'110px'},200);
			$(this).css({backgroundPosition:'center -50px',transition:'all 0.4s'});
			$('.section12-cap').css({background:'rgba(50,50,50,0.2)',transition:'all 0.1s'});
			},
		mouseleave: function(){
			$('.sec12-box').stop().animate({width:'90px'},200);
			$(this).css({backgroundPosition:'center center',transition:'all 0.4s'});
			$('.section12-cap').css({background:'rgba(50,50,50,0.7)',transition:'all 0.1s'});
		}
	});

//섹션13	
	$('.section13-wrap').on({
		mouseover: function(){
			$('.sec13-box').stop().animate({width:'110px'},200);
			$(this).css({backgroundPosition:'center -50px',transition:'all 0.4s'});
			$('.section13-cap').css({background:'rgba(50,50,50,0.4)',transition:'all 0.1s'});
			},
		mouseleave: function(){
			$('.sec13-box').stop().animate({width:'90px'},200);
			$(this).css({backgroundPosition:'center center',transition:'all 0.4s'});
			$('.section13-cap').css({background:'rgba(50,50,50,0.7)',transition:'all 0.1s'});
		}
	});

//섹션14	
	$('.section14-wrap').on({
		mouseover: function(){
			$('.sec14-box').stop().animate({width:'110px'},200);
			$(this).css({backgroundPosition:'center -50px',transition:'all 0.4s'});
			$('.section14-cap').css({background:'rgba(50,50,50,0.4)',transition:'all 0.1s'});
			},
		mouseleave: function(){
			$('.sec14-box').stop().animate({width:'90px'},200);
			$(this).css({backgroundPosition:'center center',transition:'all 0.4s'});
			$('.section14-cap').css({background:'rgba(50,50,50,0.7)',transition:'all 0.1s'});
		}
	});	
});