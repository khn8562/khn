$(function(){
	var a;
	var b;
	
	$('.modal-Window').fadeOut(0);
	
	
	$('.modal-close-bt, .modal-Window').on({
		click: function(){
			$('.modal-Window').fadeOut(500);
		}
		
	
		
	});
//갤러리 이미지 버튼을 클릭시 모달창 나타남	
	$('.galleryBt').on({
		click: function(){
			$('.modal-Window').fadeIn(500);			//모달창 서서히 나타남
			a=$(this).prev().attr('src');			//현재 클릭된 버튼 이전의 이미지 파일 경로와 파일명을 변수a에 기억
				$('.modal-img').attr('src',a);		//모달창에 이미지를 a의 경로와 파일명으로 속성(attribute) 값 변경
			
			b=$(this).prev().attr('alt');			//현재 클릭된 버튼 이전의 alt 값을 변수 b에 기억
				$('.modal-img-caption').text(b);	//모달창에 이미지 제목(이미지 대체 문구 alt)으로 변수 b를 입력한다.
	
			
		},
		
		mouseover: function(){
			$(this).prev('img').css({transform:'scale(1.5,1.5)',transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).prev('img').css({transform:'scale(1,1)',transition:'all 0.3s'});
		}
	
	});
	
	
});