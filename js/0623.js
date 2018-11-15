$(function(){
	a=0;
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
	
	function navbt_Fn(){
		$('.navBt').css({borderBottom:'0px solid #fff'});
	}
		
	function navbt0_Fn(){
		$('.navBt0').css({borderBottom:'1px solid #fff'});
	}
	function navbt0_offFn(){
		$('.navBt0').css({borderBottom:'0px solid #fff'});
	}
	
	function navbt1_Fn(){
		$('.navBt1').css({borderBottom:'1px solid #fff'});
	}
	function navbt1_offFn(){
		$('.navBt1').css({borderBottom:'0px solid #fff'});
	}
	
	function navbt2_Fn(){
		$('.navBt2').css({borderBottom:'1px solid #fff'});
	}
	function navbt2_offFn(){
		$('.navBt2').css({borderBottom:'0px solid #fff'});
	}
	
	function navbt3_Fn(){
		$('.navBt3').css({borderBottom:'1px solid #fff'});
	}
	function navbt3_offFn(){
		$('.navBt3').css({borderBottom:'0px solid #fff'});
	}
	
	function navbt4_Fn(){
		$('.navBt4').css({borderBottom:'1px solid #fff'});
	}
	function navbt4_offFn(){
		$('.navBt4').css({borderBottom:'0px solid #fff'});
	}
	
	function navbt5_Fn(){
		$('.navBt5').css({borderBottom:'1px solid #fff'});
		
	}
	function navbt5_offFn(){
		$('.navBt5').css({borderBottom:'0px solid #fff'});
		
	}
	
		$(window).scroll(function(){
		if($(window).scrollTop()>=sec9Top && $(window).scrollTop()<sec10Top){
			if(a==0){
				navbt3_Fn();
				a=1;
			}
		}
		else{
			navbt3_offFn();
			a=0;
		}
		});
	
});