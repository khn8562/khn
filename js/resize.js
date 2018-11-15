$(function(){
	var winW=$(window).innerWidth();
	var winH=$(window).innerHeight();

	//섹션1 너비 변수	
	var S1imgW=$('.section1-main-img-bg>img').innerWidth();
	var answer1=(winW-S1imgW)/2;  //이동거리
	//섹션2 너비 변수	
	var S2imgW=$('.section2-main-img-bg').innerWidth();
	var answer2=(winW-S2imgW)/2;  //이동거리	
	//섹션3 너비 변수	
	var S3imgW=$('.section3-main-img-bg').innerWidth();
	var answer3=(winW-S3imgW)/2;  //이동거리	
	//섹션4 너비 변수	
	var S4imgW=$('.section4-main-img-bg').innerWidth();
	var answer4=(winW-S4imgW)/2;  //이동거리
	//섹션6 너비 변수	
	var S6imgW=$('.section6-main-img-bg').innerWidth();
	var answer6=(winW-S6imgW)/2;  //이동거리
	
	//섹션10 너비 변수	
	var S10imgW=$('.section10-main-img-bg').innerWidth();
	var answer10=(winW-S10imgW)/2;  //이동거리



	//footer 너비 변수	
	var footimgW=$('.footer-main-img-bg>img').innerWidth();
	var answerF=(winW-footimgW)/2;  //이동거리		

	
	var setId=''
		$('#section1').css({height:winH,transition:'all 0.4s'});
		$('#section2').css({height:winH,transition:'all 0.4s'});
		$('#section3').css({height:winH,transition:'all 0.4s'});
		$('#section4').css({height:winH,transition:'all 0.4s'});
		
	autoResize();
	
	
	
	
	
//너비 resize 함수
	function resizeFn(){
		$('.section1-main-img-bg>img').css({marginLeft:answer1,transition:'all 0.3s'});
		$('.section2-main-img-bg>img').css({marginLeft:answer2,transition:'all 0.3s'});
		$('.section3-main-img-bg>img').css({marginLeft:answer3,transition:'all 0.3s'});
		$('.section4-main-img-bg>img').css({marginLeft:answer4,transition:'all 0.3s'});
		$('.section6-main-img-bg>img').css({marginLeft:answer6,transition:'all 0.3s'});
		$('.section10-main-img-bg>img').css({marginLeft:answer10,transition:'all 0.3s'});
		$('.footer-main-img-bg>img').css({marginLeft:answerF,transition:'all 0.3s'});
		
	}

	
	
	
//자동 resize 함수
  function autoResize(){
	  setId=setInterval(resizeFn,100);
  }	
 
//한번만 실행 
 function stopResize(){
	clearInterval(setId);
} 


//리사이즈 실행
	$(window).resize(function(){
		winW=$(window).innerWidth();
		winH=$(window).innerHeight();
		
		S1imgW=$('.section1-main-img-bg>img').innerWidth();
		answer1=(winW-S1imgW)/2;  //이동거리
		S2imgW=$('.section2-main-img-bg>img').innerWidth();
		answer2=(winW-S1imgW)/2;  //이동거리
		S3imgW=$('.section3-main-img-bg>img').innerWidth();
		answer3=(winW-S3imgW)/2;  //이동거리
		S4imgW=$('.section4-main-img-bg>img').innerWidth();
		answer4=(winW-S4imgW)/2;  //이동거리
		S6imgW=$('.section6-main-img-bg>img').innerWidth();
		answer6=(winW-S6imgW)/2;  //이동거리

		S10imgW=$('.section10-main-img-bg>img').innerWidth();
        answer10=(winW-S10imgW)/2;  //이동거리
		
		

		footimgW=$('.footer-main-img-bg>img').innerWidth();
		answerF=(winW-footimgW)/2;  //이동거리		
		
		$('#section1').css({height:winH,transition:'all 0.4s'});
		$('#section2').css({height:winH,transition:'all 0.4s'});
		$('#section3').css({height:winH,transition:'all 0.4s'});
		$('#section4').css({height:winH,transition:'all 0.4s'});
		
		resizeFn();
		stopResize();
	
	
	
		
	});
	
});