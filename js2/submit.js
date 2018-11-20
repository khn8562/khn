$(function(){
	
	//submit Button Click Event
	$('.submitBt').on({
		click: function(){
				if($('#name').val()==''){
					//alert('이름을 입력!!');
					//$('#irum').focus();
					$('#name').css({outline:'2px solid #f00'});
					
				}
				if($('#email').val()==''){
					//alert('이름을 입력!!');
					//$('#irum').focus();
					$('#email').css({outline:'2px solid #f00'});
					
				}
				if($('#message').val()==''){
					//alert('이름을 입력!!');
					//$('#irum').focus();
					$('#message').css({outline:'2px solid #f00'});
					
				}
					return false;
		}
	});
	
	
	
});