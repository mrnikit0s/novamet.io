$menuFlag = -1;
$catalogFlag = -1;

$w = $(window).width(); //текущий размер экрана
$moveFlag460 = 0;
$moveFlag800 = 0;

$reloadFlag = 0;
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

	$w = $w = $(window).width();
	$(window).resize(function () {
		$w = $(window).width();
	});

	// перестановка элементов в section1 ----------------------------------

	if ($moveFlag460 == 0 && $w > 460) {
		$('.section1__content').before('<div class="section1__content-row"</div>');
		$('.section1__content-row').append('<div class="section1__content-col"</div>');
		$('.section1__content-row').append('<div class="section1__content-col"</div>');
		/* левый блок */
		$('.section1__logo').appendTo('.section1__content-col:first-child');
		$('.section1__phone-black').appendTo('.section1__content-col:first-child');
		$('.section1__whatsapp').appendTo('.section1__content-col:first-child');
		/* правый блок */
		$('.section1__phone-red').appendTo('.section1__content-col:last-child');
		$('.section1__callback').appendTo('.section1__content-col:last-child');
		$('.section1__price').appendTo('.section1__content-col:last-child');
		$('.section1__calc').appendTo('.section1__content-col:last-child');
		/* удаляем лишнее */
		$('.section1__content').detach();
		$moveFlag460 = 1;
	}
	if ($moveFlag800 == 0 && $w > 800) {
		for ($i = 0; $i < 2; $i++) {
			$('.section1__content-row').append('<div class="section1__content-col"</div>');
		}
		//$('.section1__logo').appendTo('.section1__content-col:first-child');
		/* второй столбец */
		$('.section1__phone-red').appendTo('.section1__content-col:nth-child(2)');
		$('.section1__callback').appendTo('.section1__content-col:nth-child(2)');
		/* третий столбец */
		$('.section1__phone-black').appendTo('.section1__content-col:nth-child(3)');
		$('.section1__whatsapp').appendTo('.section1__content-col:nth-child(3)');
		/* четвертый столбец */
		$('.section1__price').appendTo('.section1__content-col:last-child');
		$('.section1__calc').appendTo('.section1__content-col:last-child');
		$moveFlag800 = 1;
	}

	// перестановка элементов в section1 ----------------------------------
});