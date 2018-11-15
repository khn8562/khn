$(function(){
	
	//2열인 경우 -1칸
	var img3Top=$('.s8-img1').innerHeight()+20;
	var img6Top=img3Top+$('.s8-img3').innerHeight()+20;
	var img7Top=img6Top+$('.s8-img6').innerHeight()+20;
	var img9Top=img7Top+$('.s8-img7').innerHeight()+20;
	var img12Top=img9Top+$('.s8-img9').innerHeight()+20;
	
	//2열인 경우 -2칸
	var img4Top=$('.s8-img2').innerHeight()+20;
	var img5Top=img4Top+$('.s8-img4').innerHeight()+20;
	var img8Top=img5Top+$('.s8-img5').innerHeight()+20;
	var img10Top=img8Top+$('.s8-img8').innerHeight()+20;
	var img11Top=img10Top+$('.s8-img10').innerHeight();
	

	
	var winW=$(window).innerWidth();
	var winH=$(window).innerHeight();
	
	
//2열 움직이는 함수	
	function moveFn(){
		$('.s8-img3').css({Top:img3Top,left:'1.70940170940171%',transition:'all 0.3s'});
		$('.s8-img6').css({Top:img6Top,left:'1.70940170940171%',transition:'all 0.3s'});
		$('.s8-img7').css({Top:img7Top,left:'1.70940170940171%',transition:'all 0.3s'});
		$('.s8-img9').css({Top:img9Top,left:'1.70940170940171%',transition:'all 0.3s'});
		$('.s8-img12').css({Top:img12Top,left:'1.70940170940171%',transition:'all 0.3s'});

		$('.s8-img4').css({Top:img4Top,left:'35.21367521367521%',transition:'all 0.3s'});
		$('.s8-img5').css({Top:img5Top,left:'35.21367521367521%',transition:'all 0.3s'});
		$('.s8-img8').css({Top:img8Top,left:'35.21367521367521%',transition:'all 0.3s'});
		$('.s8-img10').css({Top:img10Top,left:'35.21367521367521%',transition:'all 0.3s'});
		$('.s8-img11').css({Top:img11Top,left:'35.21367521367521%',transition:'all 0.3s'});
	}	
	
	
	$(window).resize(function(){
		winW=$(window).innerWidth();
		
		moveFn();
		
		
	});

	
	
});