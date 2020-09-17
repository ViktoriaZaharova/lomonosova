$('.slider-masters').slick({
    slideToShow: 4,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.slider-masters__nav-wrapper',
    responsive: [
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});

$('.portfolio-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    autoplay: true,
    arrows: false
});

$(".slider-masters").on('afterChange', function (event, slick, currentSlide) {
    $(".cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$("body").on("click", ".btn-scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

$('.menu-fixed-btn').click(function () {
    $('.mobile-menu').css('left', '0');

    setTimeout(function () {
        $('.menu, .mobile-links').css('opacity', '1');
    }, 1500)

});

$('.mobile-menu__close').click(function () {
    setTimeout(function () {
        $('.mobile-menu').css('left', '-100%');
    }, 1500);


    $('.menu, .mobile-links').css('opacity', '0');
});

$('.gallery-item').fancybox();

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);

        setTimeout(function () {
            $('.mobile-menu').css('left', '-100%');
        }, 500);

        $('.menu, .mobile-links').css('opacity', '0');
    }
    return false;
});

// Инициализация карты
ymaps.ready(init);

function init () {

    //Центрирование и выбор масштаба карты
    var myMap = new ymaps.Map('map', {
        center: [55.758873, 37.779152],
        zoom: 16
    });

    // Создание своей метки
    var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [55.758873, 37.779152] , {
            // Свойства метки
            hintContent: '', //Подсказка при наведении на маркер
            iconContent: '',

        }, {
            iconImageHref: 'img/loc.png',  // картинка иконки
            iconImageSize: [46, 61],                                      // размеры картинки
            iconImageOffset: [-70, -40],// смещение картинки

        });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);

    //Элементы управления
    myMap.controls
    // Кнопка изменения масштаба
        .add('zoomControl')
        // Список типов карты
        .add('typeSelector')
        // Кнопка изменения масштаба - справа
        .add('smallZoomControl', { right: 5, top: 75 })
        // Стандартный набор кнопок
        .add('mapTools')
        //Линейка масштаба
        .add(new ymaps.control.ScaleLine());
}
