$(function(){
var t=0,a=0,b=0,c=0,d=0,e=0,f=0,g=0;	
  
  $('.fa-bars').on({
	click: function(){
		if(t==0){
			$('#wrap').stop().animate({left:'0%'},0).animate({left:'-80%'},600);
			$('#wrap').css({position:'fixed'});
			$('.mobile-sub-menu').css({display:'block',position:'relative',marginLeft:'20%'},600);
			t=1;
		}
		else if (t==1){
			$('#wrap').stop().animate({left:'-80%'},0).animate({left:'0%'},600);
			$('#wrap').css({position:'relative'});
			$('.mobile-sub-menu').css({display:'none'},600);
			t=0;
		}
	  }

  });
  
  $('.mbSubBt1').on({
	click: function(){
		if(a==0){
			$('.mbSubM1').css({display:'block'});
			$('.fa-angle-down1').css({display:'none'});
			$('.fa-angle-up1').css({display:'block'});
			a=1;
		}
		else if (a==1){
			$('.mbSubM1').css({display:'none'});
			$('.fa-angle-down1').css({display:'block'});
			$('.fa-angle-up1').css({display:'none'});			
			a=0;
		}
	  }
  });
  $('.mbSubBt2').on({
	click: function(){
		if(b==0){
			$('.mbSubM2').css({display:'block'});
			$('.fa-angle-down2').css({display:'none'});
			$('.fa-angle-up2').css({display:'block'});
			b=1;
		}
		else if (b==1){
			$('.mbSubM2').css({display:'none'});
			$('.fa-angle-down2').css({display:'block'});
			$('.fa-angle-up2').css({display:'none'});			
			b=0;
		}
	  }
  });
  $('.mbSubBt3').on({
	click: function(){
		if(c==0){
			$('.mbSubM3').css({display:'block'});
			$('.fa-angle-down3').css({display:'none'});
			$('.fa-angle-up3').css({display:'block'});
			c=1;
		}
		else if (c==1){
			$('.mbSubM3').css({display:'none'});
			$('.fa-angle-down3').css({display:'block'});
			$('.fa-angle-up3').css({display:'none'});			
			c=0;
		}
	  }
  });
  $('.mbSubBt4').on({
	click: function(){
		if(d==0){
			$('.mbSubM4').css({display:'block'});
			$('.fa-angle-down4').css({display:'none'});
			$('.fa-angle-up4').css({display:'block'});
			d=1;
		}
		else if (d==1){
			$('.mbSubM4').css({display:'none'});
			$('.fa-angle-down4').css({display:'block'});
			$('.fa-angle-up4').css({display:'none'});			
			d=0;
		}
	  }
  });
  $('.mbSubBt5').on({
	click: function(){
		if(e==0){
			$('.mbSubM5').css({display:'block'});
			$('.fa-angle-down5').css({display:'none'});
			$('.fa-angle-up5').css({display:'block'});
			e=1;
		}
		else if (e==1){
			$('.mbSubM5').css({display:'none'});
			$('.fa-angle-down5').css({display:'block'});
			$('.fa-angle-up5').css({display:'none'});			
			e=0;
		}
	  }
  });
  $('.mbSubBt6').on({
	click: function(){
		if(f==0){
			$('.mbSubM6').css({display:'block'});
			$('.fa-angle-down6').css({display:'none'});
			$('.fa-angle-up6').css({display:'block'});
			f=1;
		}
		else if (f==1){
			$('.mbSubM6').css({display:'none'});
			$('.fa-angle-down6').css({display:'block'});
			$('.fa-angle-up6').css({display:'none'});			
			f=0;
		}
	  }
  });
 $('.mbSubBt7').on({
	click: function(){
		if(g==0){
			$('.mbSubM7').css({display:'block'});
			$('.fa-angle-down7').css({display:'none'});
			$('.fa-angle-up7').css({display:'block'});
			g=1;
		}
		else if (g==1){
			$('.mbSubM7').css({display:'none'});
			$('.fa-angle-down7').css({display:'block'});
			$('.fa-angle-up7').css({display:'none'});			
			g=0;
		}
	  }
  });

  
});