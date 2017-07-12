// Фіксований HEADER
$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});
		});

// Плавний скрол по якорях
$(document).ready(function(){
	$("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 75;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1200);
	});
});







$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#arr").removeClass("block");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 500) {
					$("#arr").addClass("block").fadeIn('fast');
				} else {
					$("#arr").removeClass("block").fadeOut('fast');
				};
			});
		});


$(document).ready(function(){
	$("#arr").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 75;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



$(document).ready(function(){
    
    
    $("html").niceScroll({cursorcolor: '#FED136', cursoropacitymin: '0' });
    });
                  







     