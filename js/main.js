$(document).ready(function () {
	$('.header__burger-menu').click(function (event) {
		$('.header__burger-menu,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});