$(function(){
	$('.sub').fadeOut(0);
	$('.sub2').fadeOut(0);
	$('.sub3').fadeOut(0);
	$('.sub4').fadeOut(0);
	
	
$('.navBt1').on({
		mouseenter: function(){
			$('.sub1').fadeIn(0);
			$('.sub2').fadeOut(0);
		},
		focusin: function(){
			$('.sub1').fadeIn(0);
			$('.sub2').fadeOut(0);
		}
	});
	
	$('.head-box-wrap').on({
		mouseleave: function(){
			$('.sub1').fadeOut(0);
		}
	});
	
$('.navBt2').on({
		mouseenter: function(){
			$('.sub2').fadeIn(0);
			$('.sub1').fadeOut(0);
			$('.sub3').fadeOut(0);
		},
		focusin: function(){
			$('.sub2').fadeIn(0);
			$('.sub1').fadeOut(0);
			$('.sub3').fadeOut(0);			
		}
	});
	
	$('.head-box-wrap').on({
		mouseleave: function(){
			$('.sub2').fadeOut(0);
		}
	});
	
	$('.navBt3').on({
		mouseenter: function(){
			$('.sub3').fadeIn(0);
			$('.sub2').fadeOut(0);
			$('.sub4').fadeOut(0);			
		},
		focusin: function(){
			$('.sub3').fadeIn(0);
			$('.sub2').fadeOut(0);
			$('.sub4').fadeOut(0);	
		}
	});
	
	$('.head-box-wrap').on({
		mouseleave: function(){
			$('.sub3').fadeOut(0);
		}
	});
	
	$('.navBt4').on({
		mouseenter: function(){
			$('.sub4').fadeIn(0);
			$('.sub3').fadeOut(0);
		},
		focusin: function(){
			$('.sub4').fadeIn(0);
			$('.sub3').fadeOut(0);
		}
	});
	
	$('.head-box-wrap').on({
		mouseleave: function(){
			$('.sub4').fadeOut(0);
		}
	});
	

	
	$('.langBt1').on({
		focusin: function(){
			$('.sub').fadeOut(0);
		}
	});
});