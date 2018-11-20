$(function(){
	var headerTop=$('#header').offset().top-64;
	var sec1Top=$('#section1').offset().top-64;
	var sec2Top=$('#section2').offset().top-64;
	var sec3Top=$('#section3').offset().top-64;
	var sec4Top=$('#section4').offset().top-64;
	var footerTop=$('#footer').offset().top-64;

	var subTop=$('.header-row1-wrap').offset().top;
	
	$('.sideBttext').animate({opacity:0},0);
	
	
	$(window).scroll(function(){
		fn_topFixed();
		fn_subFixed();
		fn_scrollSideBt();
		fn_topsubFixed();
	});

	
	
	
	
//탑 fixed 함수	
	function fn_topFixed(){
		if($(window).scrollTop()>=subTop){
			$('.header-row1-wrap').addClass('subFixed');
		}
		else{
			$('.header-row1-wrap').removeClass('subFixed');
		}
	}
	

//sub fixed 함수	
	function fn_subFixed(){
		if($(window).scrollTop()>=subTop){
			$('.sub').addClass('subFixed');
		}
		else{
			$('.sub').removeClass('subFixed');
		}
	}
//top sub fixed 함수	
	function fn_topsubFixed(){
		if($(window).scrollTop()>=subTop){
			$('.head-box-wrap').addClass('subFixed');
		}
		else{
			$('.head-box-wrap').removeClass('subFixed');
		}
	}	
	
	
	//사이드 섹션 이동 버튼&색상변경
		$('.sideBt1').on({ 
			click:	function(){
						$('html,body').stop().animate({scrollTop:headerTop},500);
					sidBtOn1_fn();	
					}
		});
		$('.sideBt2').on({ 
			click:	function(){
						$('html,body').stop().animate({scrollTop:sec1Top},500);			
					sidBtOn2_fn();
					}
		});	
		$('.sideBt3').on({  
			click:	function(){
						$('html,body').stop().animate({scrollTop:sec2Top},500);			
					sidBtOn3_fn();
					}
		});	
		$('.sideBt4').on({  
			click:	function(){
						$('html,body').stop().animate({scrollTop:sec3Top},500);			
					sidBtOn4_fn();
					}
		});	
		$('.sideBt5').on({  
			click:	function(){
						$('html,body').stop().animate({scrollTop:sec4Top},500);			
					
					}
		});	

	



	
	
		//스크롤 범위 함수
			function fn_scrollSideBt(){
				if($(window).scrollTop()>=headerTop && $(window).scrollTop()<sec1Top){
					sidBtOn1_fn();
					sidBtOff2_fn();
					sidBtOff3_fn();
					sidBtOff4_fn();
					sidBtOff5_fn();
				}
				if($(window).scrollTop()>=sec1Top && $(window).scrollTop()<sec2Top){
					sidBtOn2_fn();
					sidBtOff1_fn();
					sidBtOff3_fn();
					sidBtOff4_fn();
					sidBtOff5_fn();
				}
				if($(window).scrollTop()>=sec2Top && $(window).scrollTop()<sec3Top){
					sidBtOn3_fn();
					sidBtOff1_fn();
					sidBtOff2_fn();
					sidBtOff4_fn();
					sidBtOff5_fn();
				}
				if($(window).scrollTop()>=sec3Top && $(window).scrollTop()<sec4Top){
					sidBtOn4_fn();
					sidBtOff1_fn();
					sidBtOff3_fn();
					sidBtOff2_fn();
					sidBtOff5_fn();
				}
				if($(window).scrollTop()>=sec4Top && $(window).scrollTop()<footerTop){
					sidBtOn5_fn();
					sidBtOff1_fn();
					sidBtOff3_fn();
					sidBtOff4_fn();
					sidBtOff2_fn();
				}
			}
	
			//사이드버튼 이미지 변경 함수 on
				function sidBtOn1_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('off','on');
					$('.sideBt1').css('background-image',bgNameOn);
				}
				function sidBtOn2_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('off','on');
					$('.sideBt2').css('background-image',bgNameOn);
				}
				function sidBtOn3_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('off','on');
					$('.sideBt3').css('background-image',bgNameOn);
				}
				function sidBtOn4_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('off','on');
					$('.sideBt4').css('background-image',bgNameOn);
				}
				function sidBtOn5_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('off','on');
					$('.sideBt5').css('background-image',bgNameOn);
				}
				
				//사이드버튼 이미지 변경 함수 off
				function sidBtOff1_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('on','off');
					$('.sideBt1').css('background-image',bgNameOn);
				}
				function sidBtOff2_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('on','off');
					$('.sideBt2').css('background-image',bgNameOn);
				}
				function sidBtOff3_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('on','off');
					$('.sideBt3').css('background-image',bgNameOn);
				}
				function sidBtOff4_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('on','off');
					$('.sideBt4').css('background-image',bgNameOn);
				}
				function sidBtOff5_fn(){
					var bgNameOn=$('.sideBt').css('background-image').replace('on','off');
					$('.sideBt5').css('background-image',bgNameOn);
				}
					



	
		
		
		
//사이드버튼 마우스 오버시 텍스트 보이기		
	$('.sideBt1').on({
		mouseover: function(){
			$('.sideBttext1').animate({opacity:1},0);
				sidBtOn1_fn();
		}
	});
	$('.sideBt1').on({
		mouseleave: function(){
			$('.sideBttext1').animate({opacity:0},0);
			sidBtOff1_fn();
		}
	});
	

	$('.sideBt2').on({
		mouseover: function(){
			$('.sideBttext2').animate({opacity:1},0);
			sidBtOn2_fn();
		}
	});
	$('.sideBt2').on({
		mouseleave: function(){
			$('.sideBttext2').animate({opacity:0},0);
			sidBtOff2_fn();
		}
	});


	$('.sideBt3').on({
		mouseover: function(){
			$('.sideBttext3').animate({opacity:1},0);
			sidBtOn3_fn();
		}
	});
	$('.sideBt3').on({
		mouseleave: function(){
			$('.sideBttext3').animate({opacity:0},0);
			sidBtOff3_fn();		
		}
	});


	$('.sideBt4').on({
		mouseover: function(){
			$('.sideBttext4').animate({opacity:1},0);
			sidBtOn4_fn();
		}
	});
	$('.sideBt4').on({
		mouseleave: function(){
			$('.sideBttext4').animate({opacity:0},0);
			sidBtOff4_fn();
		}
	});	
	
	
	$('.sideBt5').on({
		mouseover: function(){
			$('.sideBttext5').animate({opacity:1},0);
			sidBtOn5_fn();			
		}
	});
	$('.sideBt5').on({
		mouseleave: function(){
			$('.sideBttext5').animate({opacity:0},0);
			sidBtOff5_fn();
		}
	});	
	

		
		
		
		
		
		
	
// goTop버튼
	$('.goTop-Bt').on({
			click:	function(){
						$('html,body').animate({scrollTop:0},800);
					}
		});
	});