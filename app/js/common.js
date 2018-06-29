$(function() {

	// Плавное раскрытие блока описания сервиса
	$('.services__title').on('click', function(){
		$(this).toggleClass('services__title_opened')
		$(this).siblings().slideToggle(500);
		$(this).parent().siblings().children('.services__description').slideUp(500);
		$(this).parent().siblings().children('.services__title').removeClass('services__title_opened');
	});

	// Показ меню на экранах разрешением ниже 768px 
	$('.navShow').on('click', function(){
		$(this).toggleClass('navShow_opened');
		$('.nav').toggleClass('nav_opened');
	});

});
