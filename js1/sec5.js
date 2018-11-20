$(function(){
	
	$('.modal-popup').fadeOut(0);
	
	
	$('.galleryBt').on({
		click: function(){
			$('.modal-popup').fadeIn(500);			
			a=$(this).prev().attr('src');			
				$('.modal-img').attr('src',a);		
			
			b=$(this).prev().attr('alt');			
				$('.modal-img-caption').text(b);	
	
			
		},
		
		mouseover: function(){
			$(this).prev('img').css({transform:'scale(1.2,1.2)',transition:'all 0.5s',opacity:1});
		},
		mouseleave: function(){
			$(this).prev('img').css({transform:'scale(1,1)',transition:'all 0.5s',opacity:0.8});
		}
	
	});
	
	
	$('.modal-close-bt').on({
		click: function(){
			$('.modal-popup').fadeOut(0);
		}
	});
	
});