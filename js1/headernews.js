$(function(){

	
	
	$('.facebook-text-wrap').css({opacity:0},0);
	
	
	
	
	
//클릭 이벤트
	$('.contentsBt1').on({
		click: function(){
			conBt1();
			onBtfn();			
		}
	});
	
	$('.contentsBt2').on({
		click: function(){
			 conBt2();	
		}
	});
	$('.contentsBt3').on({
		click: function(){
			conBt3();	
		}
	});
	
	
	
	
	//floatleft초기값
	function leftfloat(){
		$('.header-iconbox-wrap').css({float:'left'});
	}
	
	//버튼 클릭시
	function conBt1(){
		$('.header-news-wrap').css({zIndex:3});
		$('.header-blog-wrap').css({zIndex:2});
		$('.header-face-wrap').css({zIndex:1});
		
		leftfloat();
		$('.hslide').css({opacity:1},0);
		$('.arrow-wrap').css({opacity:1},0);
		$('.facebook-text-wrap').css({opacity:0},0);
		$('.header-news-textbox-wrap').css({opacity:1},0);
	}
	
	function conBt2(){
		$('.header-blog-wrap').css({zIndex:3});
		$('.header-face-wrap').css({zIndex:2});
		$('.header-news-wrap').css({zIndex:1});
		
		leftfloat();
		$('.header-row3-news-wrap>li').css({float:'right'});
		$('.facebook-text-wrap').css({opacity:0},0);
	}
	
	function conBt3(){
		$('.header-face-wrap').css({zIndex:3});
		$('.header-blog-wrap').css({zIndex:2});
		$('.header-news-wrap').css({zIndex:1});
		
		leftfloat();
		$('.header-row3-news-wrap>li').css({float:'right'});
		$('.header-row3-blog-wrap>li').css({float:'right'});
		
		$('.hslide').css({opacity:0},0);
		$('.arrow-wrap').css({opacity:0},0);
		$('.facebook-text-wrap').css({opacity:1},0);
		$('.header-news-textbox-wrap').css({opacity:0},0);
		
	}
	
	
	


	
	
	// on off 바꾸기
	$('.iconbox1').on({
		click:function(){
				
				var bgNameOn=$('.iconbox1').css('background-image').replace('off','on');
				$('.iconbox1').css('background-image', bgNameOn);
				offBtfn2();
				offBtfn3();
		}
		
				
	});
		$('.iconbox2').on({
		click:function(){
				
				 var bgNameOn=$('.iconbox2').css('background-image').replace('off','on');
				$('.iconbox2').css('background-image', bgNameOn);
				 offBtfn1();
				 offBtfn3();
		}
				
	});
		$('.iconbox3').on({
		click:function(){
				
				 var bgNameOn=$('.iconbox3').css('background-image').replace('off','on');
				$('.iconbox3').css('background-image', bgNameOn);
				offBtfn2();
				offBtfn1();
		}
				
	});

	
	
//off 함수	
	function offBtfn1(){
	var bgNameOff=$('.iconbox1').css('background-image').replace('on','off')
		$('.iconbox1').css('background-image', bgNameOff);
	}	
	
	function offBtfn2(){
	var bgNameOff=$('.iconbox2').css('background-image').replace('on','off')
		$('.iconbox2').css('background-image', bgNameOff);
	}

	function offBtfn3(){
	var bgNameOff=$('.iconbox3').css('background-image').replace('on','off')
		$('.iconbox3').css('background-image', bgNameOff);
	}	
	
});