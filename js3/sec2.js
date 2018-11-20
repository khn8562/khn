$(function(){
	var s=[];
	sec2Img();
	autoPlay();
	
//이미지에 마우스 오버시 버튼 색상 변경 이벤트

	$('.section2-img').on({
		mouseover: function(){
			$('.section2-imgBt1>li').children().css({border:'3px solid #917e5a',background:'#fff',color:'#917e5a',fontWeight:600,boxSizing:'border-box'});
		},
		mouseleave: function(){
			$('.section2-imgBt1>li').children().css({border:'1px solid #fff',background:'#eee',color:'#777',fontWeight:500});
		}
	});
	
	$('.section2-img2').on({
		mouseover: function(){
			$('.section2-imgBt2>li').children().css({border:'3px solid #917e5a',background:'#fff',color:'#917e5a',fontWeight:600,boxSizing:'border-box'});
		},
		mouseleave: function(){
			$('.section2-imgBt2>li').children().css({border:'1px solid #fff',background:'#eee',color:'#777',fontWeight:500});
		}
	});
	
	function  autoPlay(){	
		setIn=setInterval(nextPlay,2000);
	}
	
	function nextPlay(){
		if(s[0]==1){
			sec2Img2();
		}
		else if(s[1]==1){
			sec2Img();
		}
		
	}
	
	//이미지 FadeIn Out 함수
		function sec2Img(){
			s[0]=1,s[1]=0;
			
			$('.section2-img').css({display:'block'});
			$('.section2-img2').css({display:'none'});
		}
		function sec2Img2(){
			s[0]=0,s[1]=1;
			
			$('.section2-img').css({display:'none'});
			$('.section2-img2').css({display:'block'});
		}


});