$(function(){
	var s=[];
nextSlide1();

	//좌우화살버튼

	$('.sec7arrowR').on({
		click:	function(){
			nextPlay();
		}
	});
	

	$('.sec7arrowL').on({
		click:	function(){
			prevPlay();
		}
	});
	

	function prevPlay(){
		if(s[0]==1){
			prevSlide3();	
		}
		else if(s[1]==1){
			prevSlide1();	
		}
		else if(s[2]==1){
			prevSlide2();	
		}		
	}


	
	function nextPlay(){
		if(s[0]==1){
			nextSlide2();
		}
		else if(s[1]==1){
			nextSlide3();
		}
		else if(s[2]==1){
			nextSlide1();
		}			
	}



	
		/* 다음(next) 슬라이드 - append 방식 : 맨 위에 데이터가 맨 밑을로 내려가는 형태  */
	function nextSlide1(){
		s[0]=1,s[1]=0,s[2]=0;				
		$('.blog-3-wrap').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.blog-1-wrap').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.blog-2-wrap').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}
	
	function nextSlide2(){
		s[0]=0,s[1]=1,s[2]=0;		
		$('.blog-1-wrap').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.blog-2-wrap').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.blog-3-wrap').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}	

	function nextSlide3(){
		s[0]=0,s[1]=0,s[2]=1;	
		$('.blog-2-wrap').stop().animate({left:  '0%'},0).animate({left:'-100%'},500);
		$('.blog-3-wrap').stop().animate({left:'100%'},0).animate({left:   '0%'},500);
		$('.blog-1-wrap').stop().animate({left:'200%'},0).animate({left: '100%'},500);
	}	



	
	/* 이전(Prev) 슬라이드 - prepend : 맨 밑에 데이터가 맨 위로 올라가는 형태 */ 
	function prevSlide3(){
		s[0]=0,s[1]=0,s[2]=1;		

		$('.blog-2-wrap').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.blog-3-wrap').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.blog-1-wrap').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	}

	function prevSlide2(){
		s[0]=0,s[1]=1,s[2]=0;	
		
		$('.blog-1-wrap').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.blog-2-wrap').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.blog-3-wrap').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	}
	function prevSlide1(){
		s[0]=1,s[1]=0,s[2]=0;	

		$('.blog-3-wrap').stop().animate({left:'-200%'},0).animate({left:'-100%'},500);
		$('.blog-1-wrap').stop().animate({left:'-100%'},0).animate({left:   '0%'},500);
		$('.blog-2-wrap').stop().animate({left:   '0%'},0).animate({left: '100%'},500);
	}
	
});