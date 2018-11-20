$(function(){
	var a;
	
	$('.modal-Window').fadeOut(0);
	
	$('.galleryBt').on({
		click: function(){
			$('.modal-Window').fadeIn(0);
				a=$(this).prev().attr('src');
				$('.modal-img').attr('src',a);
				b=$(this).prev().attr('alt');
				$('.modal-img-caption').text(b)
		}
	});	
	
	$('.modal-close-bt,.modal-Window').on({
		click: function(){
			$('.modal-Window').fadeOut(0);
		}
	});
	
});