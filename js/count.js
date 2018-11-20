$(function(){
	var i=-1; 
	var setId='';
	var sec3Top=$('#section3').offset().top;
	var sec5Top=$('#section5').offset().top;
	
	
	$(window).scroll(function(){

		if($(window).scrollTop()>=sec3Top && $(window).scrollTop()<sec5Top){
			
			setId=setInterval(countFn,100);
	
				function countFn(){
					i++;
					if(i<=100){
						$('.count1').text(i);	
					}
					if(i<=100){
						$('.count2').text(i);	
					}
					if(i<=90){
						$('.count3').text(i);	
					}
					if(i<=95){
						$('.count4').text(i);	
					}
			 
			 
					//setInterval() 중지함으로써 완전 프로그램 종료
					if(i>100){
						clearInterval(setId);
					}
				}
				
		}
		else{
			i=-1;
		}
	
	});
	
	
	
});