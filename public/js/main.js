$(function(){

  $(".menu a").on("click", function (event) {
    //ЛИПКОЕ МЕНЮ ВЕРСИЯ НЕ ДЛЯ ВСЕХ (нужно header__top перенести в bady!!!)!!!отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 3000);
  });

  $('.slider').slick({
    dots: true,
    prevArrow: false,
    nextArrow: false
  });

  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
  
  var mixer = mixitup('.galery__foto');
});