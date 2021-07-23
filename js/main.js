$menuFlag = -1;
$catalogFlag = -1;
$(document).ready(function () {

	$('.header__burger-menu').click(function (event) {
		if ($catalogFlag == -1) {
			$('.header__burger-menu,.header__menu').toggleClass('active');
			$('body').toggleClass('lock');
			$('.wrapper').toggleClass('lock');
			$menuFlag = $menuFlag * -1;
			$catalogFlag = -1;
		}
	});
	$('.header__burger-catalog').click(function (event) {
		if ($menuFlag == -1) {
			$('.header__burger-catalog,.header__catalog').toggleClass('active');
			$('body').toggleClass('lock');
			$('.wrapper').toggleClass('lock');
			$catalogFlag = $catalogFlag * (-1);
			$menuFlag = -1;
		}
	});
});