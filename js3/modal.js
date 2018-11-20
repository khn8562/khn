$(function(){
	
	var n=$('.slide').length;	
	var m=0,i=0;  
	var s=[];		
		formatFn(); 

	$('#modal').fadeOut(0);		
		
		
	function formatFn(){
			for(i=0;i<n;i++){
				s[i]=0;
			}		
		}


	//Modal close
	$('.modal-close-bt').on({
		click:	function(){
			
			$('.modal-wrap').stop().animate({top:-150},300);
			$('.slide').stop().animate({opacity:0},300);
			$('#modal').fadeOut(300);
			
		}		
	});		
		


	//닫기
	$('.modal-close-bt').on({
		click:	function(){
			$('#modal').fadeOut(0);
		}
	});
	
	
	///Gallery Image  Anchor Button Click Event
	$('.modalImg').on({
		click:	function(){
			var imgNum=parseInt($(this).parent().attr('class').slice(-1));				
				$('.slide').stop().animate({opacity:0},0);
				$('.slide').eq(imgNum).stop().animate({opacity:1},200);
				$('.modal-wrap').stop().animate({top:-150},0).animate({top:40},400);
				$('#modal').fadeIn(600);
				
		}
	});
	

	

	
	
	
	
});