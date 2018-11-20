$(function(){
	var s1=0,s2=0,s3=0;
	
	
	
	nextSlide1();
	
	

		$('.arrow-left-Bt').on({
			 click:function(){
				
				 prvPlay();
			 }
		});

		$('.arrow-right-Bt').on({
			 click:function(){
				
				 nextPlay();
			 }
		});
		
		
	function nextPlay(){
		
		if(s1==1){
			nextSlide2();			
		}
		else if(s2==1){
			nextSlide3();			
		}
		else if(s3==1){
			nextSlide1();			
		}
	}
	function prvPlay(){
		
		if(s1==1){
			prvSlide3();			
		}
		else if(s2==1){
			prvSlide1();			
		}
		else if(s3==1){
			prvSlide2();			
		}
	}
		
		
		
		
		
	
	function prvSlide3(){
		s1=0,s2=0,s3=1;
		
		
		$('.headerslide2').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.headerslide3').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.headerslide1').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	} 
		function prvSlide2(){
		s1=0,s2=1,s3=0;
		
		
		$('.headerslide1').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.headerslide2').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.headerslide3').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	} 
		function prvSlide1(){
		s1=1,s2=0,s3=0;
		
		
		$('.headerslide3').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.headerslide1').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.headerslide2').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	}

	
	
	function nextSlide1(){
		s1=1,s2=0,s3=0;
		
	
		$('.headerslide3').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.headerslide1').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.headerslide2').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}
	function nextSlide2(){
		s1=0,s2=1,s3=0;
		
	
		$('.headerslide1').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.headerslide2').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.headerslide3').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}
	function nextSlide3(){
		s1=0,s2=0,s3=1;
		
	
		$('.headerslide2').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.headerslide3').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.headerslide1').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}
	



});