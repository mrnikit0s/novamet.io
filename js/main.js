$menuFlag = -1;
$catalogFlag = -1;
$menuLock = false;
$catalogLock = false;


$w = $(window).width(); //текущий размер экрана
$moveFlag460 = 0;
$moveFlag800 = 0;
$moveFlag1024 = 0;
$moveFlag1200 = 0;
$reloadFlag = 0;


/* отслеживание завершение изменения ширины экрана 
var resizeTimer = false;

$(window).on('resize', function (e) {

	if (!resizeTimer) {
		$(window).trigger('resizestart');
	}

	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function () {

		resizeTimer = false;
		$(window).trigger('resizeend');

	}, 250);
}).on('resizeend', function () {
	move($w);
});
/* -------------------------------------------------------*/

/* при смене ориентации перезагрузка страницы */
window.addEventListener('orientationchange', function () {
	location.reload();
}, false);


function move($w) {
	$w = $(window).width();

	if ($w >= 320 && $w <= 800) {
		$('.header__search-btn').click(function () {
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
		/* header__catalog в content__aside */
		$('.header__catalog').appendTo('.content__aside');
		$('.header__catalog').addClass('content__catalog');
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
}





$(document).ready(function () {
	// wp меню добавление классов top-menu
	$('nav.menu-top_menu-container').addClass('header__menu');
	$('.header__menu ul:first-child').addClass('header__menu-list');
	$('.header__menu-list li a').addClass('header__menu-link');
	$('.sub-menu ').addClass('header__submenu-list');
	// добавление классов catalog menu
	$('nav.header__catalog ul').addClass('header__catalog-list');
	$('.header__catalog-list li a').addClass('header__catalog-link');

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

	/* burger меню доработка */

	$('.header__burger-menu-wrapper').click(function (event) {
		$('.header__burger-menu,.header__menu').toggleClass('active');
		$('.header__burger-catalog,.header__catalog').removeClass('active');

		$menuFlag = $menuFlag * -1;
		if ($menuFlag == 1) {
			$('body').addClass('lock');
			$('.wrapper').addClass('lock');
		}
		$menuLock = $('.header__menu').hasClass('active');
		if ($menuLock == false) {
			$('body').removeClass('lock');
			$('.wrapper').removeClass('lock');
		}

	});
	$('.header__burger-catalog-wrapper').click(function (event) {
		$('.header__burger-catalog,.header__catalog').toggleClass('active');
		$('.header__burger-menu,.header__menu').removeClass('active');
		$catalogFlag = $catalogFlag * (-1);
		if ($catalogFlag == 1) {
			$('body').addClass('lock');
			$('.wrapper').addClass('lock');
		}
		$catalogLock = $('.header__catalog').hasClass('active');
		if ($catalogLock == false) {
			$('body').removeClass('lock');
			$('.wrapper').removeClass('lock');
		}
	});
	/* скрываем меню при нажатии на пустом месте при мобильном разрешении*/
	if ($w < 1024) {
		jQuery(function ($) {
			$(document).mouseup(function (e) { // событие клика по веб-документу
				var divMenu = $(".header__burger-menu-wrapper"); // тут указываем ID элемента
				var divCatalog = $(".header__burger-catalog-wrapper");
				if (!divMenu.is(e.target) // если клик был не по нашему блоку
					&& divMenu.has(e.target).length === 0) { // и не по его дочерним элементам
					$('.header__menu').hide(); // скрываем его
					$('.header__burger-menu,.header__menu').removeClass('active');
				}
				else {
					$('.header__menu').show(); //возможность открытия при следующем клике
				}
				if (!divCatalog.is(e.target) // если клик был не по нашему блоку
					&& divCatalog.has(e.target).length === 0) { // и не по его дочерним элементам
					$('.header__catalog').hide(); // скрываем его
					$('.header__burger-catalog,.header__catalog').removeClass('active');
				}
				else {
					$('.header__catalog').show(); //возможность открытия при следующем клике
				}
			});
		});
	}



	//------------------------------------------------- move element ------------------------

	/*
		$(window).resize(function () {
		//	location.reload();
			//$w = $(window).width();
			//moveNew();
	
		});
	*/

	move($w);
});
