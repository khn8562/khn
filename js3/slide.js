$(function(){
var n=$('.sec6-slide').length;

var cnt=0,t=0;	
var a=[],b=[],s=[];
var imsi='',imsi2='';

			
	
	sec6Slide(0);		

	
	$('.arrowR').on({
		click:	function(){
			nextSlideFn();
		}
	});
	
	
	$('.arrowL').on({
		click:	function(){
			prevSlideFn();
		}
	});		
	
	
	//다음 슬라이드 
	function nextSlideFn(){

		for(i=0;i<n;i++){
			if(s[i]==1){
				if(i==(n-1)){ 
					sec6Slide(0);	//첫번째 슬라이드 실행
				}
				else{
					sec6Slide(i+1);
				}
			}				
		}
		
	}

	
	//이전 슬라이드 
	function prevSlideFn(){
		
		for(i=0;i<n;i++){
			if(s[i]==1){
				if(i==0){  //첫번째인경우는
					sec6PrevSlide(n-1);		//마지막 슬라이드로 이동
				}
				else{
					sec6PrevSlide(i-1);		//이전 슬라이드로 이동
				}
				
			}								
		}			
		
	}		
	


	//슬라이드(prevSlide) 자동화 함수(Apppend())
	function sec6PrevSlide(z){
		t=8;
		for(i=0;i<n;i++){
			s[i]=0;
			b[i]=t-i;   			
		}
		s[z]=1;
		
		//첫번째 이전슬라이드						
		imsi=b.pop();	
		b.unshift(imsi);		

		
	
		
		for(i=z;i<n-1;i++){   		
			imsi=b.shift();  
			b.push(imsi); 	
		}	
		
		j=-2;
		for(i=0;i<n;i++){
			j++;
			$('.sec6-slide').eq(b[i]).stop().animate({left:(-1*(i*100)) + '%'},0).animate({left: (-1*(j*100)) + '%'},600);		
		}	
	}
	
	

	
	//슬라이드(nextSlide) 자동화 함수(Apppend())
	function sec6Slide(z){
		
		for(i=0;i<n;i++){
			s[i]=0;
			a[i]=i; 	
		}
		s[z]=1;
		
		//첫번째 다음슬라이드
		imsi=a.pop();
		a.unshift(imsi);
		
		
		
		for(i=0;i<z;i++){	
			imsi=a.shift(); 
			a.push(imsi);   
							
		}	 
		
		j=-2;
		for(i=0;i<n;i++){
			j++;
			$('.sec6-slide').eq(a[i]).stop().animate({left:(i*100) + '%'},0).animate({left:(j*100)+'%'},600);			
		}
		
		
	}
	
	

	
	
	
	
});






