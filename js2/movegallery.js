$(function(){
	
	$('.galleryBt1').on({
		click: function(){
			allFn();
		}
	});
	$('.galleryBt2').on({
		click: function(){
			people();
		}
	});
	$('.galleryBt3').on({
		click: function(){
			natureFn();
		}
	});
	$('.galleryBt4').on({
		click: function(){
			widlifeFn();
		}
	});
	$('.galleryBt5').on({
		click: function(){
			 objectFn();
		}
	});
	
	

	function allFn(){
		$('.s8-img1').css({display:'block',top:0,left:0,transition:'all 0.6s'});
		$('.s8-img2').css({display:'block',top:0,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img3').css({display:'block',top:0,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img4').css({display:'block',top:391.67,left:0,transition:'all 0.6s'});
		$('.s8-img5').css({display:'block',top:569.5,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img6').css({display:'block',top:391.67,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img7').css({display:'block',top:961.17,left:0,transition:'all 0.6s'});
		$('.s8-img8').css({display:'block',top:961.17,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img9').css({display:'block',top:961.17,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img10').css({display:'block',top:1352.84,left:0,transition:'all 0.6s'});
		$('.s8-img11').css({display:'block',top:1530.67,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img12').css({display:'block',top:1352.84,left:'68.71794871794872%',transition:'all 0.6s'});
	}
	function people(){
		$('.s8-img1').css({display:'block',top:0,left:0,transition:'all 0.6s'});
		$('.s8-img3').css({display:'block',top:0,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img5').css({display:'block',top:0,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img8').css({display:'block',top:391.67,left:0,transition:'all 0.6s'});
		$('.s8-img10').css({display:'block',top:391.67,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img12').css({display:'block',top:391.67,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img11').css({display:'block',top:961.17,left:0,transition:'all 0.6s'});
		$('.s8-img2').css({display:'none',top:'49.95686070686071%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img4').css({display:'none',top:'49.95686070686071%',left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img6').css({display:'none',top:'70.31392931392931%',left:0,transition:'all 0.6s'});
		$('.s8-img7').css({display:'none',top:'70.31392931392931%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img9').css({display:'none',top:'70.31392931392931%',left:'68.71794871794872%',transition:'all 0.6s'});
	}
	function natureFn(){
		$('.s8-img2').css({display:'block',top:0,left:0,transition:'all 0.6s'});
		$('.s8-img4').css({display:'block',top:0,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img6').css({display:'block',top:0,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img5').css({display:'block',top:569.5,left:0,transition:'all 0.6s'});
		$('.s8-img8').css({display:'block',top:569.5,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img9').css({display:'block',top:569.5,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img10').css({display:'block',top:961.17,left:0,transition:'all 0.6s'});
		$('.s8-img11').css({display:'block',top:1139,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img12').css({display:'block',top:961.17,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img1').css({display:'none',top:'70.31392931392931%',left:0,transition:'all 0.6s'});
		$('.s8-img3').css({display:'none',top:'70.31392931392931%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img7').css({display:'none',top:'70.31392931392931%',left:'68.71794871794872%',transition:'all 0.6s'});
	}
	function widlifeFn(){
		$('.s8-img1').css({display:'block',top:0,left:0,transition:'all 0.6s'});
		$('.s8-img4').css({display:'block',top:0,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img5').css({display:'block',top:0,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img7').css({display:'block',top:391.67,left:0,transition:'all 0.6s'});
		$('.s8-img10').css({display:'block',top:569.5,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img8').css({display:'block',top:391.67,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img12').css({display:'block',top:781.17,left:0,transition:'all 0.6s'});
		$('.s8-img2').css({display:'none',top:'49.95686070686071%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img11').css({display:'block',top:961.17,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img3').css({display:'none',top:'70.31392931392931%',left:0,transition:'all 0.6s'});
		$('.s8-img6').css({display:'none',top:'70.31392931392931%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img9').css({display:'none',top:'70.31392931392931%',left:'68.71794871794872%',transition:'all 0.6s'});
	}
	function objectFn(){
		$('.s8-img2').css({display:'block',top:0,left:0,transition:'all 0.6s'});
		$('.s8-img3').css({display:'block',top:0,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img6').css({display:'block',top:0,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img8').css({display:'block',top:569.5,left:0,transition:'all 0.6s'});
		$('.s8-img7').css({display:'block',top:391.67,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img9').css({display:'block',top:569.5,left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img1').css({display:'none',top:'49.95686070686071%',left:0,transition:'all 0.6s'});
		$('.s8-img12').css({display:'block',top:783.34,left:'35.21367521367521%',transition:'all 0.6s'});
		$('.s8-img4').css({display:'none',top:'49.95686070686071%',left:'68.71794871794872%',transition:'all 0.6s'});
		$('.s8-img5').css({display:'none',top:'70.31392931392931%',left:0,transition:'all 0.6s'});
		$('.s8-img10').css({display:'none',top:'70.31392931392931%',left:'1.70940170940171%',transition:'all 0.6s'});
		$('.s8-img11').css({display:'none',top:'70.31392931392931%',left:'68.71794871794872%',transition:'all 0.6s'});
	}

	
});