$(document).ready(function(){
			// Фикмированная шапка при скролле
			$("#header").removeClass("active");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 200) {
					$("#header").addClass("active").fadeIn("slow");
				} else {
					$("#header").removeClass("active").fadeIn("slow");
				};
			});
		});



(function($){
    $(function() {
        $('.icon').on('click', function(){
            $(this).closest('.menu').toggleClass('menu-open');
        });
        
    });
})(jQuery);