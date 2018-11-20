$(function(){
	var winH=$(window).innerHeight();  //창의 높이
	
	$('#section1').css({height:winH});
	var x=$
	
	//search버튼
	$('.searchBt').on({
		mouseenter:function(){
			$(this).css({background:'#c00'}); //
			$(this).children('i').css({color:'#fff'});
		},
		focus:function(){
			$(this).css({background:'#c00'}); //
			$(this).children('i').css({color:'#fff'});
		},
		mouseleave:function(){
			$(this).css({background:'transparent'});
			$(this).children('i').css({color:'#444'});
		},
		blur:function(){
			$(this).css({background:'transparent'});
			$(this).children('i').css({color:'#444'});
		}
		
	});
	
});				