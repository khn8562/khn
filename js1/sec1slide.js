$(function(){
	
	$('.sec1-bt3').css('backgroundPosition','center -107px');
	$('.slide').fadeOut(0);
	$('.slide3').fadeIn(0);
	$('.slidetext').fadeOut(0);
	$('.section1-slide3-3').fadeIn(0);
	$('.line-bt-ul').fadeOut(0);	
	$('.line-bt3-ul').fadeIn(0);
	
	
	$('.sec1-bt1').on({
		click: function(){
			slide1();
		}
	});
	$('.sec1-bt2').on({
		click: function(){
			slide2();
		}
	});
	$('.sec1-bt3').on({
		click: function(){
			slide3();
		}
	});
	$('.sec1-bt4').on({
		click: function(){
			slide4();
		}
	});
	


			



	function formatBtfn(){
		$('.sec1-bt').css('backgroundPosition','center 0px');
		$('.sec1-bt3').css('backgroundPosition','center 12px');
	}	

	
	




	function slide1(){
		//슬라이드 초기화
		$('.slide').fadeOut(0);
		$('.slide1').fadeIn(0);
		
		//버튼 초기화
		formatBtfn();
		$('.sec1-bt1').css('backgroundPosition','center -119px');		

		$('.slidetext').fadeOut(0);	
		$('.section1-slide1-1').fadeIn(0);		
		
		$('.line-bt-ul').fadeOut(0);	
		$('.line-bt1-ul').fadeIn(0);
	}
	
	
	function slide2(){
		//슬라이드 초기화
		$('.slide').fadeOut(0);
		$('.slide2').fadeIn(0);
		
		//버튼 초기화
		formatBtfn();
		$('.sec1-bt2').css('backgroundPosition','center -119px');		
		//텍스트상자 	
		$('.slidetext').fadeOut(0);	
		$('.section1-slide2-2').fadeIn(0);		
		
		$('.line-bt-ul').fadeOut(0);	
		$('.line-bt2-ul').fadeIn(0);
	}	
	
	
	function slide3(){
		$('.slide').fadeOut(0);
		$('.slide3').fadeIn(0);
		
		formatBtfn();
		$('.sec1-bt3').css('backgroundPosition','center -107px');
		
		$('.slidetext').fadeOut(0);
		$('.section1-slide3-3').fadeIn(0);
		
		$('.line-bt-ul').fadeOut(0);	
		$('.line-bt3-ul').fadeIn(0);
	}	
	
	function slide4(){
		$('.slide').fadeOut(0);
		$('.slide4').fadeIn(0);
		
		formatBtfn();
		$('.sec1-bt4').css('backgroundPosition','center -119px');
		$('.slidetext').fadeOut(0);
		$('.section1-slide4-4').fadeIn(0);
		
		$('.line-bt-ul').fadeOut(0);	
		$('.line-bt4-ul').fadeIn(0);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});