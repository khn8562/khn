$(function(){
//디자인버튼
	$('.designBt').on({
		mouseover: function(){
			$('.sub-DESIGNER-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-DESIGNER').css({display:'block',transition:'all 0.9s'});
		},
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-DESIGNER-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-DESIGNER').css({display:'block',transition:'all 0.9s'});
			$('.sub-COLLECTIONS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'none',transition:'all 0.9s'});			
		}
	});
	$('.designBt-wrap').on({
		mouseleave: function(){
			$('.sub-DESIGNER-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-DESIGNER').css({display:'none',transition:'all 0.9s'});
		}
	});
//컬렉버튼
	$('.colletBt').on({
		mouseover: function(){
			$('.sub-COLLECTIONS-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'block',transition:'all 0.9s'});
		},
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-COLLECTIONS-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'block',transition:'all 0.9s'});
			$('.sub-DESIGNER-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-DESIGNER').css({display:'none',transition:'all 0.9s'});	
			$('.sub-ACCESSORIES-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'none',transition:'all 0.9s'});		
		}
	});
	$('.collectBt-wrap').on({
		mouseleave: function(){
			$('.sub-COLLECTIONS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'none',transition:'all 0.9s'});
		}
	});
	
//세레모니 버튼	
	$('.ceremonyBt').on({
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-COLLECTIONS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'none',transition:'all 0.9s'});		
		}
	});
	
//악세사리 버튼
	$('.accesoryBt').on({
		mouseover: function(){
			$('.sub-ACCESSORIES-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'block',transition:'all 0.9s'});
		},
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-ACCESSORIES-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'block',transition:'all 0.9s'});	
			$('.sub-COLLECTIONS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-COLLECTIONS').css({display:'none',transition:'all 0.9s'});			
		}
	});
	$('.accssoryBt-wrap').on({
		mouseleave: function(){
			$('.sub-ACCESSORIES-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'none',transition:'all 0.9s'});
		}
	});

//예약 버튼	
	$('.bookBt').on({
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-ACCESSORIES-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'none',transition:'all 0.9s'});
			$('.sub-BOUTIQUE-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-BOUTIQUE').css({display:'none',transition:'all 0.9s'});	
		}
	});
	
//부띠크 버튼
	$('.boutiqueBt').on({
		mouseover: function(){
			$('.sub-BOUTIQUE-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-BOUTIQUE').css({display:'block',transition:'all 0.9s'});
		},
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-BOUTIQUE-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-BOUTIQUE').css({display:'block',transition:'all 0.9s'});
			$('.sub-ACCESSORIES-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-ACCESSORIES').css({display:'none',transition:'all 0.9s'});
			$('.sub-NEWS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-NEWS').css({display:'none',transition:'all 0.9s'});			
		}
	});
	$('.boutiqueBt-wrap').on({
		mouseleave: function(){
			$('.sub-BOUTIQUE-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-BOUTIQUE').css({display:'none',transition:'all 0.9s'});
		}
	});
//뉴스 버튼
	$('.newsBt').on({
		mouseover: function(){
			$('.sub-NEWS-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-NEWS').css({display:'block',transition:'all 0.9s'});
		},
		focusin: function(){
			$(this).css({color:'#917e3e'});
			$('.sub-NEWS-bg').css({display:'block',transition:'all 0.9s'});
			$('.sub-NEWS').css({display:'block',transition:'all 0.9s'});
			$('.sub-BOUTIQUE-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-BOUTIQUE').css({display:'none',transition:'all 0.9s'});	
		}
	});
	$('.newsBt-wrap').on({
		mouseleave: function(){
			$('.sub-NEWS-bg').css({display:'none',transition:'all 0.9s'});
			$('.sub-NEWS').css({display:'none',transition:'all 0.9s'});
		}
	});
	
	
	$('.menuBt').on({
		mouseover: function(){
			$(this).css({color:'#917e3e'});
		},
		mouseleave: function(){
			$(this).css({color:'#c4b493'});
		},
		
		focusout: function(){
			$(this).css({color:'#c4b493'});
		}
	});
	
});