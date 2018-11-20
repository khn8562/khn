$(function(){
	var winW=$(window).innerWidth();
	var winH=$(window).innerHeight();
	
	var s1ImgW=$('.section1-main-img-bg>img').innerWidth();
	var answer1=(winW-s1ImgW)/2;
	
	var s4ImgW=$('.section4-main-img-bg>img').innerWidth();
	var answer4=(winW-s4ImgW)/2;
	
	var s6ImgW=$('.section6-main-img-bg>img').innerWidth();
	var answer6=(winW-s6ImgW)/2;
	
	var setId=''
		$('#section1').css({height:winH,transition:'all 0.4s'});
	
		autoResize();
		
		
	function resizeFn(){
		$('.section1-main-img-bg>img').css({marginLeft:answer1,transition:'all 0.4s'});
		$('.section4-main-img-bg>img').css({marginLeft:answer4,transition:'all 0.4s'});
		$('.section6-main-img-bg>img').css({marginLeft:answer6,transition:'all 0.4s'});
	}
	
	function autoResize(){
		setId=setInterval(resizeFn,100);
	}
	
	function stopResize(){
		clearInterval(setId);
	}
	
	$(window).resize(function(){
		
		winW=$(window).innerWidth();
		winH=$(window).innerHeight();
		
		s1ImgW=$('.section1-main-img-bg>img').innerWidth();
		answer1=(winW-s1ImgW)/2;
		
		
		s4ImgW=$('.section4-main-img-bg>img').innerWidth();
		answer4=(winW-s4ImgW)/2;
		
		s6ImgW=$('.section6-main-img-bg>img').innerWidth();
		answer6=(winW-s6ImgW)/2;
		
		
		$('#section1').css({height:winH,transition:'all 0.4s'});
		resizeFn();
		stopResize();
	});
	
	
});