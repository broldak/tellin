$(document).ready(function(){

	$('.nav-item a').on('click', function(e){
		e.preventDefault();

		href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top - 114
		}, 1250);

	});

	$('#title').on('click', function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 1250);
	});

	var owl = $('#carousel');


	owl.owlCarousel({
		navigation: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		mouseDrag: false,
		items: 6
	});

	$('.img-next-btn').click(function(){
    	owl.trigger('owl.next');
  	});

  	$('.img-prev-btn').click(function(){
    	owl.trigger('owl.prev');
  	});

  	$('.img-wrap').on('mouseenter', function(){
  		$(this).find('img').animate({opacity:0.4}, 200, function(){
				if ($('.img-wrap:hover').length !== 0){
					$('.img-next-btn').fadeIn(200);
					$('.img-prev-btn').fadeIn(200);
					$('.img-text-name').fadeIn(200);
				}
			});
  	});

  	$('.img-wrap').on('mouseleave', imageHideStuff);

  	$('.img-next-btn, .img-prev-btn').on('click', imageHideStuff);

  	function imageHideStuff() {
  		$('.img-wrap').find('img').animate({opacity:1}, 200);
  		$('.img-next-btn').fadeOut(200);
  		$('.img-prev-btn').fadeOut(200);
  		$('.img-text-name').fadeOut(200);
  	}


	$(document).on('scroll', function(){
		var top = $(document).scrollTop(),
			whenDiffNegligible = Math.abs(top - $('#when').offset().top + 114) < 150,
			//whereDiffNegligible = Math.abs(top - $('#where').offset().top + 114) < 150,
			whoDiffNegligible = Math.abs(top - $('#who').offset().top + 114) < 150;

		if (top >= 0 && whenDiffNegligible) {
			$('#when').find('.heading').fadeIn(1000);
			$('#when').find('.section-content').fadeIn(1000);
		}

		//if (top >= 0 && whereDiffNegligible) {
		//	$('#where').find('.heading').fadeIn(1000);
		//	$('#where').find('.section-content').fadeIn(1000);
		//}

		if (top >= 0 && whoDiffNegligible) {
			$('#who').find('.heading').fadeIn(1000);
			$('#who').find('.section-content').fadeIn(1000);
		}
	})
});
