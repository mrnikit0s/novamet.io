$(document).ready(function () {
	$('.header__burger-menu').click(function (event) {
		$('.header__burger-menu,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__burger-catalog').click(function (event) {
		$('.header__burger-catalog,.header__catalog').toggleClass('active');
		$('body').toggleClass('lock');
	});
});