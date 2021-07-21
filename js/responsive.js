$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
	var headerMenu=$('.header_menu');
	var headerLang=$('header-top-lang');
	if(w<768){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if (headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
}
function adaptive_function() {
	var w=$(window).outerWidth();
	var h=$(window).outerHeight();
}
adaptive_function();