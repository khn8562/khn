$(function(){
	var p=[],x=0,i=0,slideNum=0;
	var n=11;
		$('.modal-popup-window').fadeOut(0);		
		
		for(i=0;i<=n;i++){
			p[i]=0;
		}
		slide(0);
		

	
	
	// 이미지 클릭시 창뜨기
	$('.gallBt').on({
		click: function(){
			$('.modal-popup-window').fadeIn(300);
			var slideNum=$(this).parent().attr('class').slice(8,9);
				slide(slideNum);
		}
	});
	
	
	
	
	
	// 왼쪽버튼 이벤트
	$('.modal-left-bt').on({
		click: function(){
			slidePrev();
		}
	});
		
		// 이전이미지 뜨는 함수 
		function slidePrev(){
			if(p[0]==1){
				slide(11);
			}
			else if(p[1]==1){
				slide(0);
			}
			else if(p[2]==1){
				slide(1);
			}
			else if(p[3]==1){
				slide(2);
			}
			else if(p[4]==1){
				slide(3);
			}
			else if(p[5]==1){
				slide(4);
			}
			else if(p[6]==1){
				slide(5);
			}
			else if(p[7]==1){
				slide(6);
			}
			else if(p[8]==1){
				slide(7);
			}
			else if(p[9]==1){
				slide(8);
			}
			else if(p[10]==1){
				slide(9);
			}
			else if(p[11]==1){
				slide(10);
			}

		}
		
		
	// 오른쪽버튼 이벤트
	$('.modal-right-bt').on({
		click: function(){
			slideNext();
		}
	});
	
		
		// 다음이미지 뜨는 함수 
		function slideNext(){
			if(p[0]==1){
				slide(1);
			}
			else if(p[1]==1){
				slide(2);
			}
			else if(p[2]==1){
				slide(3);
			}
			else if(p[3]==1){
				slide(4);
			}
			else if(p[4]==1){
				slide(5);
			}
			else if(p[5]==1){
				slide(6);
			}
			else if(p[6]==1){
				slide(7);
			}
			else if(p[7]==1){
				slide(8);
			}
			else if(p[8]==1){
				slide(9);
			}
			else if(p[9]==1){
				slide(10);
			}
			else if(p[10]==1){
				slide(11);
			}
			else if(p[11]==1){
				slide(0);
			}
			
			
		}
		
		
		
		
		
		
		// 다음이미지 함수 
		function slide(x){
			for(i=0;i<=n;i++){
				p[i]=0;
			}
			p[x]=1;	
			$('.modalSlide').stop().animate({opacity:0},0);
			$('.modalSlide').eq(x).stop().animate({opacity:1},500);
			var imgTitle=$('.modalSlide').eq(x).children().attr('alt');
			$('.modalSlide>p').text(imgTitle);
			
		}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// 닫기버튼 이벤트
	$('.modal-close-bt,.modal-img-wrap').on({
		click: function(){
			$('.modal-popup-window').fadeOut(300);
		}
	});
	
//커서 바꾸기	
	$('.modal-popup-window').on({
		mouseover: function(){
			$(this).css({cursor:'url(img/modalclose.png),auto'});
		}
	});
	$('.modalSlide>img').on({
		mouseover: function(){
			$(this).css({cursor:'pointer'});
		}
	});
	$('.modal-left-bt','.modal-right-bt').on({
		mouseover: function(){
			$(this).css({cursor:'pointer'});
		}
	});	
	
});