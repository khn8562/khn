$(function(){
	var s=[];
	sec3Img();
	autoPlay();
	sec3Img3();
	autoPlay2();
	sec3Img5();
	autoPlay3();
	sec3Img7();
	autoPlay4();
	

//이미지에 마우스 오버시 버튼 색상 변경 이벤트

	$('.sec3img').on({
		mouseover: function(){
			$('.sec3Bt1>li').children().css({border:'0px solid #917e5a',background:'#917e5a',opacity:'0.6',color:'#fff'});
		},
		mouseleave: function(){
			$('.sec3Bt1>li').children().css({border:'1px solid ##917e5a',background:'#fff',color:'#917e5a',boxSizing:'border-box'});
		}
	});
	
	$('.sec3img2').on({
		mouseover: function(){
			$('.sec3Bt2>li').children().css({border:'0px solid #917e5a',background:'#917e5a',opacity:'0.6',color:'#fff'});
		},
		mouseleave: function(){
			$('.sec3Bt2>li').children().css({border:'1px solid ##917e5a',background:'#fff',color:'#917e5a',boxSizing:'border-box'});
		}
	});
	$('.sec3img3').on({
		mouseover: function(){
			$('.sec3Bt3>li').children().css({border:'0px solid #917e5a',background:'#917e5a',opacity:'0.6',color:'#fff'});
		},
		mouseleave: function(){
			$('.sec3Bt3>li').children().css({border:'1px solid ##917e5a',background:'#fff',color:'#917e5a',boxSizing:'border-box'});
		}
	});
	
	$('.sec3img4').on({
		mouseover: function(){
			$('.sec3Bt4>li').children().css({border:'0px solid #917e5a',background:'#917e5a',opacity:'0.6',color:'#fff'});
		},
		mouseleave: function(){
			$('.sec3Bt4>li').children().css({border:'1px solid ##917e5a',background:'#fff',color:'#917e5a',boxSizing:'border-box'});
		}
	});
	
	function  autoPlay(){	
		setIn=setInterval(nextPlay,2100);
	}
	function  autoPlay2(){	
		setIn=setInterval(nextPlay2,2050);
	}
	function  autoPlay3(){	
		setIn=setInterval(nextPlay3,2050);
	}
	function  autoPlay4(){	
		setIn=setInterval(nextPlay4,2100);
	}
	
	
	
	
	function nextPlay(){
		if(s[0]==1){
			sec3Img2();
		}
		else if(s[1]==1){
			sec3Img();
		}
		
	}
	
	function nextPlay2(){
		if(s[2]==1){
			sec3Img4();
		}
		else if(s[3]==1){
			sec3Img3();
		}
		
	}
	
	function nextPlay3(){
		if(s[4]==1){
			sec3Img6();
		}
		else if(s[5]==1){
			sec3Img5();
		}
		
	}
	
	function nextPlay4(){
		if(s[6]==1){
			sec3Img8();
		}
		else if(s[7]==1){
			sec3Img7();
		}
		
	}
	
	
	
	//이미지 FadeIn Out 함수
		function sec3Img(){
			s[0]=1,s[1]=0;
			
			$('.section3-img').css({display:'block'});
			$('.section3-img2').css({display:'none'});
		}
		function sec3Img2(){
			s[0]=0,s[1]=1;
			
			$('.section3-img').css({display:'none'});
			$('.section3-img2').css({display:'block'});
		}
		function sec3Img3(){
			s[2]=1,s[3]=0;
			
			$('.section3-img3').css({display:'block'});
			$('.section3-img4').css({display:'none'});
		}
		function sec3Img4(){
			s[2]=0,s[3]=1;
			
			$('.section3-img3').css({display:'none'});
			$('.section3-img4').css({display:'block'});
		}

		function sec3Img5(){
			s[4]=1,s[5]=0;
			
			$('.section3-img5').css({display:'block'});
			$('.section3-img6').css({display:'none'});
		}
		function sec3Img6(){
			s[4]=0,s[5]=1;
			
			$('.section3-img5').css({display:'none'});
			$('.section3-img6').css({display:'block'});
		}
		function sec3Img7(){
			s[6]=1,s[7]=0;
			
			$('.section3-img7').css({display:'block'});
			$('.section3-img8').css({display:'none'});
		}
		function sec3Img8(){
			s[6]=0,s[7]=1;
			
			$('.section3-img7').css({display:'none'});
			$('.section3-img8').css({display:'block'});
		}


});