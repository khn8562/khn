$(function(){
	var a=0;
	
	var headerTop=$('#header').offset().top-64;
	var sec1Top=$('#section1').offset().top-64;
	var sec2Top=$('#section2').offset().top-64;
	var sec3Top=$('#section3').offset().top-64;
	var sec4Top=$('#section4').offset().top-64;
	var footerTop=$('#footer').offset().top-64;
	
	$(window).scroll(function(){

		if($(window).scrollTop()>=sec1Top && $(window).scrollTop()<sec2Top){
			if(a==0){ 
				a=1;
			
			$('.section2-title-wrap').stop().animate({left:-1000,opacity:0},0).animate({left:360,opacity:1},1500);
			
}
		}
		else{
			a=0;	
		}	
		
	});
	

	$(window).scroll(function(){

		if($(window).scrollTop()>=sec3Top && $(window).scrollTop()<sec4Top){
			if(a==0){ 
				a=1;
			
			$('.section3-row1-wrap').stop().animate({left:900,opacity:0},0).animate({left:308,opacity:1},1000);
			

			
		
			}
		}
		else{
			a=0;	
		}	
		
	});	
	
	$(window).scroll(function(){

		if($(window).scrollTop()>=sec4Top && $(window).scrollTop()<footerTop){
			if(a==0){ 
				a=1;
			
			$('.section4-subject-wrap').stop().animate({left:-1000,opacity:0},0).animate({left:300,opacity:1},1500);
			

			
		
			}
		}
		else{
			a=0;	
		}	
		
	});	

	
});

