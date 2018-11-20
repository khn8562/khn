$(function(){
	var sec1Top=$('#section1').offset().top-65;
	var sec2Top=$('#section2').offset().top-65;
	var sec3Top=$('#section3').offset().top-65;
	var sec4Top=$('#section4').offset().top-65;
	var sec5Top=$('#section5').offset().top-65;
	var sec6Top=$('#section6').offset().top-65;
	var sec7Top=$('#section7').offset().top-65;
	var sec8Top=$('#section8').offset().top-65;
	var sec9Top=$('#section9').offset().top-65;
	var sec10Top=$('#section10').offset().top-65;
	var sec11Top=$('#section11').offset().top-65;
	var sec12Top=$('#section12').offset().top-65;
	var sec13Top=$('#section13').offset().top-65;
	var sec14Top=$('#section14').offset().top-65;
	var sec15Top=$('#section15').offset().top-65;
	var footerTop=$('#footer').offset().top;



	$(window).scroll(function(){
		fn_scrollSubButton();
	});	
	
	function fn_scrollSubButton(){
			if ($(window).scrollTop()>=sec1Top && $(window).scrollTop()<sec5Top){
				navbt_Fn();
			}
			if ($(window).scrollTop()>=sec5Top && $(window).scrollTop()<sec6Top){
				navbt0_Fn();
			}
			if ($(window).scrollTop()>=sec6Top && $(window).scrollTop()<sec8Top){
				navbt1_Fn();
			}
			if ($(window).scrollTop()>=sec8Top && $(window).scrollTop()<sec9Top){
				navbt2_Fn();
			}
			if ($(window).scrollTop()>=sec9Top && $(window).scrollTop()<sec10Top){
				navbt3_Fn();
			}
			if ($(window).scrollTop()>=sec10Top && $(window).scrollTop()<sec15Top){
				navbt4_Fn();
			}
			if ($(window).scrollTop()>=sec15Top && $(window).scrollTop()<footerTop){
				navbt5_Fn();
			}
		}
	

	
	
	
	
	
	
//Nav 버튼 클릭하면 해당 섹션으로 이동	
	$('.logoBt').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec1Top},600);
					}
		});
	$('.navBt0').on({
			click:	function(){
						navbt0_Fn();
						$('html,body').animate({scrollTop:sec5Top},600);
					}
		});
	$('.mobileBt1').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec5Top},600);
					}
		});	
		
	$('.navBt1').on({
			click:	function(){
						navbt1_Fn();
						$('html,body').animate({scrollTop:sec6Top},600);
					}
		});
	$('.mobileBt2').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec6Top},600);
					}
		});
		
	$('.navBt2').on({
			click:	function(){
						navbt2_Fn();
						$('html,body').animate({scrollTop:sec8Top},600);
					}
		});
	$('.mobileBt3').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec8Top},600);
					}
		});
		
	$('.navBt3').on({
			click:	function(){
						navbt3_Fn();
						$('html,body').animate({scrollTop:sec9Top},600);
					}
		});
	$('.mobileBt4').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec9Top},600);
					}
		});
		
	$('.navBt4').on({
			click:	function(){
						navbt4_Fn();
						$('html,body').animate({scrollTop:sec10Top},600);
					}
		});
	$('.mobileBt5').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec10Top},600);
					}
		});
		
	$('.navBt5').on({
			click:	function(){
						navbt5_Fn();
						$('html,body').animate({scrollTop:sec15Top},600);
					}
		});
	$('.mobileBt6').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec15Top},600);
					}
		});		
		
	




	$('.sec7Bt').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec8Top},600);
					}
		});
	
	$('.contactBt1').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec15Top},600);
					}
		});	
	$('.contactBt2').on({
			click:	function(){
						$('html,body').animate({scrollTop:sec8Top},600);
					}
		});		
	
	
	
	//밑줄 들어가는거
	function navbt_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
	}
		
	function navbt0_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt0').css({borderBottom:'1px solid #fff'});
	}
	
	function navbt1_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt1').css({borderBottom:'1px solid #fff'});
	}
	
	function navbt2_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt2').css({borderBottom:'1px solid #fff'});
	}
	
	function navbt3_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt3').css({borderBottom:'1px solid #fff'});
	}
	function navbt4_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt4').css({borderBottom:'1px solid #fff'});
	}
	function navbt5_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
		$('.navBt5').css({borderBottom:'1px solid #fff'});
	}
	
});