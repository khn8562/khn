$(function(){
	var sec1Top=$('#section1').offset();
	var sec2Top=$('#section2').offset();
	var sec3Top=$('#section3').offset();



	$('.toTheTopBt').on({
			click:	function(){
						$('html,body').animate({scrollTop:0},500);
					}
		});

	// $('.navBt1').on({
	// 		click:	function(){
	// 					$('html,body').animate({scrollTop:sec2Top},600);
	// 				}
	// 	});
	

});