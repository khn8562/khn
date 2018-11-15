$(function(){
	
	$('.galleryBt1').on({
		click: function(){
			galBt1();
			
		}
		
		
	});	

	$('.galleryBt2').on({
		click: function(){
			galBt2();
			
		}
		
		
	});
	$('.galleryBt3').on({
		click: function(){
			galBt3();
			
		}
		
		
	});
	$('.galleryBt4').on({
		click: function(){
			galBt4();
			
		}
		
		
	});
	$('.galleryBt5').on({
		click: function(){
			galBt5();
			
		}
		
		
	});

	
	function formatBtfn(){
		$('.galleryBt').css({color:'#aaa'});
		$('.section8-row1-wrap>li>img').css({display:'none'});
	}	
	
	function galBt1(){
		formatBtfn();
		$('.galleryBt1').css({color:'#555'});
		$('.section8-row1-wrap>li:nth-child(1)>img').css({display:'block'});
	}
	function galBt2(){
		formatBtfn();
		$('.galleryBt2').css({color:'#555'});
		$('.section8-row1-wrap>li:nth-child(2)>img').css({display:'block'});		
	}
	function galBt3(){
		formatBtfn();
		$('.galleryBt3').css({color:'#555'});
		$('.section8-row1-wrap>li:nth-child(3)>img').css({display:'block'});		
	}
	function galBt4(){
		formatBtfn();
		$('.galleryBt4').css({color:'#555'});
		$('.section8-row1-wrap>li:nth-child(4)>img').css({display:'block'});		
	}
	function galBt5(){
		formatBtfn();
		$('.galleryBt5').css({color:'#555'});
		$('.section8-row1-wrap>li:nth-child(5)>img').css({display:'block'});		
	}


});