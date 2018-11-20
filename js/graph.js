$(function(){
	var a=0;
	
	var sec2Top=$('#section2').offset().top; //section2의 시작점 위치 offset은 간격을 말함
	var sec3Top=$('#section3').offset().top;
	
	$(window).scroll(function(){

	//스크롤탑값이 섹션2의 범위에 있을때 실행한다.	
		if($(window).scrollTop()>=sec2Top && $(window).scrollTop()<sec3Top){
			if(a==0){ //단, a=0 일때만 실행
				a=1;// 그리고 계속 반복을 막기 위해 a=1로 바꾼다.
			
							$('.content-text').stop().animate({left:300,opacity:0},0).animate({left:0,opacity:1},1000);

			
			$('.graph1').stop().animate({width:0},0).animate({width:'100%'},2200).animate({width:'95%'},400);
			$('.graph2').stop().animate({width:0},0).animate({width:'100%'},2000).animate({width:'90%'},400);
			$('.graph3').stop().animate({width:0},0).animate({width:'100%'},1900).animate({width:'95%'},400);
		
			}
		}
		else{
			a=0;	//섹션 2을 제외한 모든 위치에서 초기화된다. 그래야 섹션 2에 위치할때 다시 실행 할 수 있더록 함이다.
		}	
		
	});
	
	
	
});