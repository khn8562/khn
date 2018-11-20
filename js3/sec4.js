$(function(){
	var s=[];
	sec4Img();
	autoPlay();
	sec4Img3();
	autoPlay2();
	sec4Img5();
	autoPlay3();
	
//이미지에 마우스 오버시 버튼 색상 변경 이벤트

	$('.sec4img1').on({
		mouseover: function(){
			$('.sec4Bt1>li').children().css({border:'1px solid #555',background:'transparent',fontWeight:600,color:'#555',transition:'all 0.6s'});
		},
		mouseleave: function(){
			$('.sec4Bt1>li').children().css({border:'1px solid #917e5a',background:'#fff',opacity:'0.6',color:'#917e5a',boxSizing:'border-box',transition:'all 0.6s'});
		}
	});
	$('.sec4img2').on({
		mouseover: function(){
			$('.sec4Bt2>li').children().css({border:'1px solid #555',background:'transparent',fontWeight:600,color:'#555',transition:'all 0.6s'});
		},
		mouseleave: function(){
			$('.sec4Bt2>li').children().css({border:'1px solid #917e5a',background:'#fff',opacity:'0.6',color:'#917e5a',boxSizing:'border-box',transition:'all 0.6s'});
		}
	});
	$('.sec4img3').on({
		mouseover: function(){
			$('.sec4Bt3>li').children().css({border:'1px solid #555',background:'transparent',fontWeight:600,color:'#555',transition:'all 0.6s'});
		},
		mouseleave: function(){
			$('.sec4Bt3>li').children().css({border:'1px solid #917e5a',background:'#fff',opacity:'0.6',color:'#917e5a',boxSizing:'border-box',transition:'all 0.6s'});
		}
	});



	

	
	function  autoPlay(){	
		setIn=setInterval(nextPlay,2100);
	}
	function  autoPlay2(){	
		setIn=setInterval(nextPlay2,2050);
	}
	function  autoPlay3(){	
		setIn=setInterval(nextPlay3,2000);
	}

	
	
	
	
	function nextPlay(){
		if(s[0]==1){
			sec4Img2();
		}
		else if(s[1]==1){
			sec4Img();
		}
		
	}
	
	function nextPlay2(){
		if(s[2]==1){
			sec4Img4();
		}
		else if(s[3]==1){
			sec4Img3();
		}
		
	}

	function nextPlay3(){
		if(s[4]==1){
			sec4Img6();
		}
		else if(s[5]==1){
			sec4Img5();
		}
		
	}



	
	
	
	//이미지 FadeIn Out 함수
		function sec4Img(){
			s[0]=1,s[1]=0;
			
			$('.section4-img').css({display:'block'});
			$('.section4-img2').css({display:'none'});
		}
		function sec4Img2(){
			s[0]=0,s[1]=1;
			
			$('.section4-img').css({display:'none'});
			$('.section4-img2').css({display:'block'});
		}
		
		
		function sec4Img3(){
			s[2]=1,s[3]=0;
			
			$('.section4-img3').css({display:'block'});
			$('.section4-img4').css({display:'none'});
		}
		function sec4Img4(){
			s[2]=0,s[3]=1;
			
			$('.section4-img3').css({display:'none'});
			$('.section4-img4').css({display:'block'});
		}

		function sec4Img5(){
			s[4]=1,s[5]=0;
			
			$('.section4-img5').css({display:'block'});
			$('.section4-img6').css({display:'none'});
		}
		function sec4Img6(){
			s[4]=0,s[5]=1;
			
			$('.section4-img5').css({display:'none'});
			$('.section4-img6').css({display:'block'});
		}





});