$menuFlag = -1;
$catalogFlag = -1;

$w = $(window).width(); //текущий размер экрана
$moveFlag460 = 0;
$moveFlag800 = 0;
$moveFlag1024 = 0;
$moveFlag1200 = 0;
$reloadFlag = 0;

//------------------------ burger click--------------------------------------

$(document).ready(function () {
	/* slider */
	$('.slider').slick({
		centerMode: true,
		slideToShow: 1,
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 800,
				settings: {
					centerMode: false,
					infinite: true,
					dots: true
				}
			},

		]
	});
	/*---------------------------------------*/

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
	//------------------------------------------------- move element ------------------------
	$w = $(window).width();
	if ($w >= 320 && $w <= 800) {
		$('.header__search-btn').click(function (event) {
			$('.header__search-block').toggleClass('active');
			$('.header__search-form').toggleClass('active');
		});
	}
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
		$moveFlag800 = 0;
		$moveFlag1024 = 0;
		$moveFlag1200 = 0;

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
		$moveFlag460 = 0;
		$moveFlag1024 = 0;
		$moveFlag1200 = 0;
	}
	if ($moveFlag1024 == 0 && $w >= 1024) {
		$('.topline').insertAfter('.section1');
		$('.section1__content-row').append('<div class="section1__content-col"</div>');
		/*---------------режим работы и email в 4 колонку --------------*/
		$('.header__time').appendTo('.section1__content-col:nth-child(4)');
		$('.header__email').appendTo('.section1__content-col:nth-child(4)');
		/*---------------корзину в последнюю колонку -------------------*/
		$('.topline__cart').appendTo('.section1__content-col:last-child');
		$('.topline__cart__sum span').before('<div class="topline__cart-text">Сумма: </div>');

		/*--------------- делим topline на колонки -------------------*/
		$('.topline').append('<div class="topline__row"</div>');
		for ($i = 0; $i < 3; $i++) {
			$('.topline__row').append('<div class="topline__col"></div>');
		}
		/*---------------вставляем блоки--------------------*/
		$('.topline__city').appendTo('.topline__col:first-child');
		$('.header__search').appendTo('.topline__col:nth-child(2)');
		$('.section1__price, .section1__calc').appendTo('.topline__col:last-child');
		/*---------------переносим header------------------ */
		$('.header').insertAfter('.topline');
		/*---------------меняем местами колонки-------------*/
		$('.section1__content-col:nth-child(4)').insertAfter('.section1__content-col:nth-child(2)');
		$moveFlag1024 = 1;
		$moveFlag460 = 0;
		$moveFlag800 = 0;
		$moveFlag1200 = 0;
	}
	if ($moveFlag1200 == 0 && $w >= 1200) {
		/*---------------добавляем контейнер topline----------------*/
		$('<div class=container></div>').appendTo('.topline');
		/*---------------переносим row в контейнер-----------*/
		$('.topline__row').appendTo('.topline .container');
		/*--------------------content__row в контейнер ------*/
		$('.content__row').appendTo('.content>.container');
		$moveFlag460 = 0;
		$moveFlag800 = 0;
		$moveFlag1024 = 0;
		$moveFlag1200 = 1;
	}


	$(window).resize(function () {
		$w = $(window).width();
	});

});